import './SliderArrow.css';

export default function SliderArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: '37px', height: '66px' }}
      onClick={onClick}
    />
  );
}