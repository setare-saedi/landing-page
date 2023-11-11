import './SlidItem.css'
function SlideItems({imgUrl, bigImgUrl, changeBigImg }) {
    const clickHandler = () => {
        if (imgUrl !== bigImgUrl){
            changeBigImg(imgUrl)
        }
    }
    return (
            <div className={`bg-slid relative flex justify-center items-center border-2  rounded-lg bg-violet-50 h-32 w-32 sm:h-40 sm:w-40 ${imgUrl === bigImgUrl ? 'border-violet-600' : 'border-gray-400'}`} onClick={clickHandler}>
                <img src={imgUrl} alt='' className=' z-20' width={127} height={103} />
            </div>
            
       
    );
}

export default SlideItems;