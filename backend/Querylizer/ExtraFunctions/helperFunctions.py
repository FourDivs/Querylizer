
def CreateTableQuery_Function (newData):

    schema = newData["schema"]
    table = newData["tableData"]

    NodeData = schema["nodes"]
    LinkData = schema["links"]

    #format is id : output port number
    NodeList = {} 
    TableList = {}

    for node in NodeData:
        if node["content"] == "Table":
            TableList[node["id"]] = node["outputs"][0]["id"]
            
        else:
            NodeList[node["id"]] = node["inputs"][0]["id"]

    #print(NodeList)
    #print(TableList)

    LinksInfo = {}
    for link in LinkData:
        LinksInfo[link["input"]] = link["output"]

    #print(LinksInfo)

    TableNames = {"node-1" : table["tableName"]}
    #print(TableNames)

    TableColData = table["row"]["data"]

    FinalTableData = {}

    for idKey in TableList.keys():
        FinalTableData[idKey] = {}
        FinalTableData[idKey]["port"] = TableList[idKey]

    for NameId in TableNames.keys():
        FinalTableData[NameId]["TableName"] = TableNames[NameId]

    #print(FinalTableData)

    for Column in TableColData:
        NodeId = Column["id"]
        portId = NodeList[NodeId]
        TablePortId = LinksInfo[portId]
        TableId = 0
        for idKey in TableList:
            if TableList[idKey] == TablePortId:
                TableId = idKey
                break
        
        ColData = {}
        ColData["Name"] = Column["column_name"]
        ColData["DataType"] = Column["data_type"]
        ColData["MaxLength"] = Column["max_length"]
        ColData["Primary"] = Column["primary_key"]
        ColData["Unique"] = Column["unique"]
        ColData["NotNull"] = Column["not_null"]

        if "ColumnInfo" in FinalTableData[TableId].keys():
            FinalTableData[TableId]["ColumnInfo"].append(ColData)
        else:
            FinalTableData[TableId]["ColumnInfo"] = []
            FinalTableData[TableId]["ColumnInfo"].append(ColData)
        
        #print(FinalTableData)

    #-----Preprocessing Done-----

    CreateTableQuery = {}

    for eachTable in FinalTableData.keys():
        query = "CREATE TABLE "
        query = query + FinalTableData[eachTable]["TableName"]
        query = query + " ( \n"

        UniqueColList = []

        for eachColumn in FinalTableData[eachTable]["ColumnInfo"]:
            colQuery = ""
            colQuery = colQuery + eachColumn["Name"] + " "
            colQuery = colQuery + eachColumn["DataType"] + " "
            
            if eachColumn["MaxLength"] != 0:
                colQuery = colQuery + "(" + str(eachColumn["MaxLength"]) + ")" + " "
            
            if eachColumn["NotNull"] == 1:
                colQuery = colQuery + "NOT NULL "
            
            if eachColumn["Primary"] == 1:
                colQuery = colQuery + "PRIMARY KEY "

            if eachColumn["Unique"] == 1:
                UniqueColList.append(eachColumn["Name"])
            
            colQuery = colQuery + ", \n"

            query  = query + colQuery
        
        if UniqueColList:
            uniQuery = ""
            uniQuery = uniQuery + "UNIQUE ( "
            for Name in UniqueColList:
                uniQuery = uniQuery + Name + " , "
            uniQuery = uniQuery[:-2]
            uniQuery = uniQuery + ")"

            query = query + uniQuery + "); "

        else:
            query = query[:-2]
            query = query + "); "
        
        CreateTableQuery[eachTable] = query

    return CreateTableQuery

