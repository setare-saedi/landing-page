import './SlidItem.css'
function SlideItems({imgUrl, bigImgUrl, changeBigImg }) {
    const clickHandler = () => {
        if (imgUrl !== bigImgUrl){
            changeBigImg(imgUrl)
        }
    }
    return (
            <div className={`img-slide-item
            ${imgUrl === bigImgUrl ? 'border-violet-600' : 'border-gray-400'}`} onClick={clickHandler}>
                <img src={imgUrl} alt='' className=' z-20' width={127} height={103} />
            </div>
            
       
    );
}

export default SlideItems;