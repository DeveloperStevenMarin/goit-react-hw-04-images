export default function BtnLoadMore({ onClick }) {
  return (
    <div className="container__btn-load-more">
      <button className="btn__load-more" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
