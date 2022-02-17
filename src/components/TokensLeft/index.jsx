import useBuy from "../../hooks/useBuy";

const TokenLeft = () => {
  const { state } = useBuy(false);
  const { price } = state;
  return (
    <>
    {
      price.tokenLeft && (
      <div className="token-left">
        <div className="token-left-box">
          <p>Token left: {price.tokenLeft.words[0]}</p>
        </div>
    </div>)
    }
    </>
  )
}
export default TokenLeft