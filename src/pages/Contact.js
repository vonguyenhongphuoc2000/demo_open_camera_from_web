import { Helmet } from 'react-helmet'

function Contact() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title> 12 bài tập yoga giảm mỡ bụng cho dân văn phòng - Dai-ichi Life Việt Nam </title>
                <link
                    rel="canonical"
                    href="https://demo-seo-with-reactjs-by-phuoc.vercel.app/"
                />
                <meta name="description" content="Trang thông tin hữu ích giúp bạn sống vui khỏe mỗi ngày, hiểu hơn về sức khỏe thể chất cũng như tinh thần của mình." />
                {/* <meta name="keywords" content="bí quyết sống vui, bí quyết sống khỏe, bí quyết sống vui khỏe, sống vui sống khỏe" />gi
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://kh.dai-ichi-life.com.vn/song-vui-khoe/bi-quyet/thoi-quen-song-khoe/bi-quyet-song-khoe/12-bai-tap-yoga-giam-mo-bung-cho-dan-van-phong" />
                <meta property="og:title" content="12 bài tập yoga giảm mỡ bụng cho dân văn phòng" />
                <meta property="og:description" content="Trang thông tin hữu ích giúp bạn sống vui khỏe mỗi ngày, hiểu hơn về sức khỏe thể chất cũng như tinh thần của mình." />
                <meta property="og:image" content="https://api-healthcontent.dai-ichi-life.com.vn/api/api/v1/app/downloadFile?fileName=/data/editor/news%2F%40%40%40image202209281338071_1664347039667.jpeg" /> */}

            </Helmet>
            <h1>News Page 2</h1>
            <h1 class="article-heading">12 bài tập yoga giảm mỡ bụng cho dân văn phòng</h1>
            <img alt="pilates" src={"https://api-healthcontent.dai-ichi-life.com.vn/api/api/v1/app/downloadFile?fileName=/data/editor/news%2F%40%40%40image202209281338071_1664347039667.jpeg"} style={{ width: 700, height: 394 }}></img>
        </div>
    )
}

export default Contact