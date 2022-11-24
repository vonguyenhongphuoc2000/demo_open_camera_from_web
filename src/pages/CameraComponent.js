const isIPhone =
    new RegExp("\\biPhone\\b|\\biPod\\b|\\biPad\\b", "i").test(
        window.navigator.userAgent
    ) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

const isAndroid = new RegExp(/Android|webOS|BlackBerry/i).test(
    navigator.userAgent
);

function CameraComponent() {

    const openGalleryOrCameraMobile = () => {
        if (isIPhone) {
            // window.webkit.messageHandlers.callbackHandler.postMessage("CloseApp");
            window.webkit.messageHandlers.openCamera.postMessage("");
            console.log('Click iOS')
        } else if (isAndroid && window.openCamera !== undefined) {
            //09-03-2022 test with Hanh,Vo
            console.log('Click Android Flutter')
            window.openCamera.postMessage("openCamera");
        }
        //  For Android
        if (window.appInterface !== undefined) {
            console.log('Click Android Native')
            window.appInterface.postMessage("openCamera");
        }
    }   
    
    return (
        <div>
            <p>Chọn hình hoặc Chụp</p>
            <input type={"file"} onClick={openGalleryOrCameraMobile} ></input>
        </div>);



}



export default CameraComponent