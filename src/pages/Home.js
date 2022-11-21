import { Helmet } from 'react-helmet'
function Home() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title> Dai-ichi Life Việt Nam </title>
                <link
                    rel="canonical"
                    href="https://demo-seo-with-reactjs-by-phuoc.vercel.app/"
                />
                <meta name="description" content="Giới thiệu các sản phẩm, dịch vụ của công ty bảo hiểm nhân thọ 100% vốn Nhật Bản tại thị trường Việt Nam."/>
                <meta name="keywords" content="Dai-ichi Life Việt Nam, bảo hiểm nhân thọ, dai-ichi-life việt nam, dai ichi life, bảo hiểm daiichi, bảo hiểm liên kết chung, bao hiem nhan tho, dai-ichi life viet nam, Bao hiem daiichilife"/>
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.dai-ichi-life.com.vn/" />
                <meta property="og:title" content="Dai-ichi Life Việt Nam - Công ty Bảo hiểm nhân thọ Dai-Ichi Việt Nam - Dai-ichi Life Viet Nam" />
                <meta property="og:description" content="Trang chủ" />
                <meta property="og:image" content="https://static.wixstatic.com/media/9d8ed5_4b95b8fbdaca472393c6a8d50dd400fa~mv2.png/v1/fill/w_1512,h_946,al_c/9d8ed5_4b95b8fbdaca472393c6a8d50dd400fa~mv2.png" />

            </Helmet>
            <h1 class="article-heading">Dai-ichi Connect</h1>
            <img alt="pilates" src={"https://static.wixstatic.com/media/9d8ed5_4b95b8fbdaca472393c6a8d50dd400fa~mv2.png/v1/fill/w_1512,h_946,al_c/9d8ed5_4b95b8fbdaca472393c6a8d50dd400fa~mv2.png"} style={{width: 700, height: 394}}></img>
        </div>
    )
}

export default Home