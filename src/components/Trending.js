

const Trending = ({ name,pic }) => {
    return (
        <div className="trend-main-det">
            <img src={pic} width="40px" alt="" />
            <div className="trend-det">
                <p style={{ fontSize: '14px' }}>@{name}</p>
                <p style={{ color: 'grey', fontSize: '12px' }}>World Peace Builder</p>
            </div>
        </div>

    )
}
export default Trending