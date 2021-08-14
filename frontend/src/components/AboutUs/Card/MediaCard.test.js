import { render, screen } from '@testing-library/react';
import MediaCard from './MediaCard';
import DhruvIMG from '../../../assets/team/2.jpg';

const DataMediaCard = () => (
  <MediaCard
    name="Dhruv Kothari"
    image={DhruvIMG}
    desc="A 3rd Year CSE Undergrad👨‍🎓🚀| Competitive Programmer 🏆 | Web Developer👨‍💻 | Technical Writer ✍️"
    github="https://github.com/kothariji"
    linkedin="https://www.linkedin.com/in/kotharidhruv/"
    twitter="https://twitter.com/_kothariji"
    gmail="mailto:kotharidhruv25@gmail.com"
    insta="https://www.instagram.com/junior.kothari/"
  />
);

describe('<MediaCard />', () => {
  test('Name Check', () => {
    render(<DataMediaCard />);
    const linkElement = screen.getByText('Dhruv Kothari');
    expect(linkElement).toBeInTheDocument();
  });

  test('Image Check', () => {
    render(<DataMediaCard />);
    const linkElement = screen.getByTestId('image-test');
    expect(linkElement).toHaveAttribute('title', 'Dhruv Kothari');
  });

  test('Description Check', () => {
    render(<DataMediaCard />);
    const linkElement = screen.getByText(
      'A 3rd Year CSE Undergrad👨‍🎓🚀| Competitive Programmer 🏆 | Web Developer👨‍💻 | Technical Writer ✍️',
    );
    expect(linkElement).toBeInTheDocument();
  });
});
