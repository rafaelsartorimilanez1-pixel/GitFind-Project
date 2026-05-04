import './styles.css';

const ItemList = ({ title, description }) => {
  return (
    <div className="ItemList">
      <strong>{title}</strong>
      <p>{description}</p>
      <hr />
    </div>
  );
};

export default ItemList;
