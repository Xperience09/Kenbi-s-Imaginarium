import NavDropdown from "react-bootstrap/NavDropdown";

interface Props {
  className?: string;
}

const Nav_Dropdown = ({ className }: Props) => {
  return (
    <div>
      <NavDropdown title="Blogs" className={className}>
        <NavDropdown.Item href="/blogs/BlogA">Blog1</NavDropdown.Item>
        <NavDropdown.Item href="/blogs/BlogB">Blog2</NavDropdown.Item>
        <NavDropdown.Item href="/blogs/BlogC">Blog3</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

export default Nav_Dropdown;
