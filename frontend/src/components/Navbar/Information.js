import { ReactComponent as BulletPoint } from '../../assets/icons/circle.svg';

const Information = () => {
  return (
    <div style={{ padding: '10px' }}>
      <p>
        <BulletPoint style={{ color: '#7ed957' }} /> Unique Constraint
      </p>
      <p>
        <BulletPoint style={{ color: '#5ce1e6' }} /> Not Null Constraint
      </p>
      <p>
        <BulletPoint style={{ color: '#ff5757' }} /> Primary Constraint
      </p>
      <p>
        <BulletPoint style={{ color: '#ffde59' }} /> Auto Increment Constraint
      </p>
      <p>
        <BulletPoint style={{ color: '#8c52ff' }} /> Foreign key Constraint
      </p>
    </div>
  );
};

export default Information;
