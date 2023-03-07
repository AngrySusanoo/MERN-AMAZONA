import Spinner from 'react-bootstrap/Spinner';

export default function LoadingBox() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
      <span className="visually-visible">Hello World</span>
      <span className="visually-hidden">System</span>
    </Spinner>
  );
}
