import { createGlobalStyle } from 'styled-components';
import SourceSansLightWoff from './fonts/sourcesanspro-light-webfont.woff';
import SourceSansLightWoff2 from './fonts/sourcesanspro-light-webfont.woff2';
import SourceSansRegularWoff from './fonts/sourcesanspro-regular-webfont.woff';
import SourceSansRegularWoff2 from './fonts/sourcesanspro-regular-webfont.woff2';
import SourceSansBoldWoff from './fonts/sourcesanspro-bold-webfont.woff';
import SourceSansBoldWoff2 from './fonts/sourcesanspro-bold-webfont.woff2';
import ArvoRegularWoff from './fonts/arvo-regular-webfont.woff';
import ArvoRegularWoff2 from './fonts/arvo-regular-webfont.woff2';
import ArvoBoldWoff from './fonts/arvo-bold-webfont.woff';
import ArvoBoldWoff2 from './fonts/arvo-bold-webfont.woff2';
import BodyBackground from './img/bg_dirt.jpg';

const GlobalStyles = createGlobalStyle`
body{
    /* background:url(${BodyBackground}) no-repeat; */
    background-size:cover;
}
.container{
    max-width:1024px !important;
}

@font-face {
    font-family: 'source_sans_prolight';
    src: url(${SourceSansLightWoff2}) format('woff2'),
         url(${SourceSansLightWoff}) format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'source_sans_proregular';
    src: url(${SourceSansRegularWoff2}) format('woff2'),
         url(${SourceSansRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'source_sans_probold';
    src: url(${SourceSansBoldWoff2}) format('woff2'),
         url(${SourceSansBoldWoff}) format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'arvobold';
    src: url(${ArvoBoldWoff2}) format('woff2'),
         url(${ArvoBoldWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'arvoregular';
    src: url(${ArvoRegularWoff2}) format('woff2'),
         url(${ArvoRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;

}





`;

export default GlobalStyles;
