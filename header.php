<!-- php = html내에 반복되는 부분이 있을 때 필요한 부분만 따와서
별개의 파일로 구성해놓고 링크로 연결. -->
<header>
        <h1 class="logo"><a href="./index.html"><img src="./images/logo.png" alt=""></a></h1>
        <div class="right">
            <h2><a href="#">Shop in KR</a></h2>
            <form action="#" method="post" class="search">
                <fieldset>
                    <legend class="skip">검색창</legend>
                    <input type="search" id="searchtxt" placeholder="상품명을 검색해주세요.">
                    <button type="submit" id="searchbtn"><img src="./images/icon_search.png" alt="검색"></button>
                </fieldset>
            </form>
            <div class="icon">
                <a href="./login.html" id="login"><img src="./images/icon_login.png" alt="로그인"></a>
                <a href="./review.html" id="cart"><img src="./images/icon_cart.png" alt="장바구니"></a>
                <a href="#" id="menu"><img src="./images/icon_list.png" alt="메뉴창"></a>
            </div>
        </div>
        <!-- nav 클릭 시 open nav -->
        <div id="open_nav">
            <!-- 닫기버튼 -->
            <button id="nav_close" type="button"><img src="./images/nav_close.png" alt="닫기"></button>
            <!-- 광고 슬라이드 -->
            <div class="swiper" id="nav_adver">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href="#">나에게 어울리는 제품을 찾으세요? 실시간 라이브 채팅으로 제품 추천을 받아보세요.</a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#">선물하기 서비스를 통해 소중한 분에게 마음을 전하세요.</a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#">무료 배송 반품 서비스로 젠틀몬스터의 서비스를 경험하세요.</a>
                    </div>
                </div><!--end  swiper -wrapper -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <!-- 내비게이션 -->
            <nav>
                <a href="./product_list.html">선글라스</a>
                <a href="./product_list.html">안경</a>
                <a href="./product_list.html">콜라보레이션</a>
                <a href="./product_list.html">스타일</a>
                <a href="./product_list.html">브랜드이슈</a>
                <a href="./map.html">매장보기</a>
                <a href="./product_list.html">수리서비스</a>
            </nav>
        </div>
    </header>