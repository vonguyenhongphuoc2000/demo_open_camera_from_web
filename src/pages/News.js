import { Helmet } from 'react-helmet'

function News() {
    return (
        <div>
            
            <Helmet>
                <meta charSet="utf-8" />
                <title> Tập pilates là gì? Những lợi ích của môn pilates </title>
                <link
                    rel="canonical"
                    href="https://demo-seo-with-reactjs-by-phuoc.vercel.app/"
                />
                <meta name="description" content="Trang thông tin hữu ích giúp bạn sống vui khỏe mỗi ngày, hiểu hơn về sức khỏe thể chất cũng như tinh thần của mình." />
                {/* <meta name="keywords" content="bí quyết sống vui, bí quyết sống khỏe, bí quyết sống vui khỏe, sống vui sống khỏe" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://kh.dai-ichi-life.com.vn/song-vui-khoe/bi-quyet/thoi-quen-song-khoe/bi-quyet-song-khoe/tap-pilates-la-gi-nhung-loi-ich-cua-mon-pilates" />
                <meta property="og:title" content="Tập pilates là gì? Những lợi ích của môn pilates - Dai-ichi Life Việt Nam" />
                <meta property="og:description" content="Trang thông tin hữu ích giúp bạn sống vui khỏe mỗi ngày, hiểu hơn về sức khỏe thể chất cũng như tinh thần của mình." />
                <meta property="og:image" content="https://api-healthcontent.dai-ichi-life.com.vn/api/api/v1/app/downloadFile?fileName=/data/editor/news%2F%40%40%40pilates_1667795875364.png" /> <meta property="og:image:width" content="1200" /> <meta property="og:image:height" content="628" /> <link rel="canonical" href="https://kh.dai-ichi-life.com.vn/song-vui-khoe/bi-quyet" /> */}

            </Helmet>
            <h1>News page</h1>
            <h1 class="article-heading">Tập pilates là gì? Những lợi ích của môn pilates</h1>
            <img alt="pilates" src={"https://api-healthcontent.dai-ichi-life.com.vn/api/api/v1/app/downloadFile?fileName=/data/editor/news%2F%40%40%40pilates_1667795875364.png"} style={{ width: 700, height: 394 }}></img>
        </div>
    )
}

export default News