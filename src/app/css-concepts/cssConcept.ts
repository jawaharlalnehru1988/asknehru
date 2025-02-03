export interface CssMainContent{
    short: string;
    list: string[];
};

export interface CssContent{
    shape: string;
    projectedCSSShape: string;
    cssCode: string;
}

export class CssConcept {


    mainContent:CssMainContent[] = [
        {short: 'Shapes', list: [
            'square', 
            'circle', 
            'triangle', 
            'rectangle', 
            'oval', 
            'star', 
            'heart', 
            'hexagon',
            'pentagon', 
            'octagon', 
            'rhombus', 
            'parallelogram', 
            'trapezoid', 
            'diamond', 
            'cross', 
            'moon', 
            'infinity', 
            'cloud', 
            'crescent', 
        ]},
        {short: 'Layouts', list: [
            'fixed',
            'fluid',
            'adaptive',
            'responsive',
            'flexbox layout',
            'grid layout',
            'float layout',
            'inline-block layout',
            'table layout',
            'multi-column layout',
            'position layout',
            'card-based layout',
            'centered layout',
            'sidebar layout',
            'footer layout',
        ]},
        {short: 'Animations', list: [
            'animation',
            'keyframes',
            'transition',
            'transform',
            'animation-timing-function',
            'animation-duration',
            'animation-delay',
            'animation-iteration-count',
            'animation-direction',
            'animation-fill-mode',
            'animation-play-state'
        ]},
        {short: 'Flexbox', list: [
            'flex-direction',
            'flex-wrap',
            'flex-flow',
            'justify-content',
            'align-items',
            'align-content',
            'order',
            'flex-grow',
            'flex-shrink',
            'flex-basis',
            'align-self',
            'flex',
            'flexbox',
        ]},
        {short: 'Grid', list: [
            'grid',
            'grid-template',
            'grid-template-columns',
            'grid-template-rows',
            'grid-template-areas',
            'grid-auto-flow',
            'grid-auto-columns',
            'grid-auto-rows',
            'grid-column',
            'grid-column-start',
            'grid-column-end',
            'grid-row',
            'grid-row-start',
            'grid-row-end',
            'grid-gap',
            'grid-column-gap',
            'grid-row-gap',
           
        ]},
        {short: 'Responsive', list: [
            'responsive media queries',
            'responsive design',
            'responsive images',
            'responsive typography',
            'responsive tables',
            'responsive videos',
            'responsive navigation',
            'responsive layout',
            'responsive grid',
            'responsive breakpoints',
        ]},
     
        {short: 'position', list: [
            'static',
            'relative',
            'absolute',
            'fixed',
            'sticky',
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
        ]},
        {short: 'overflow', list: [
            'overflow',
            'overflow-x',
            'overflow-y',
            'scroll',
            'hidden',
            'visible',
            'auto',
        ]},
        {short: 'pseudo', list: [
           'pseudo-class',
              'pseudo-element',
                'first-child',
                'last-child',
                'nth-child',
                'first-of-type',
                'last-of-type',
                'nth-of-type',
                'not',
                'hover',
                'active',
                'focus',
                'visited',
                'link',
                'target',
                'before',
                'after',
                'content',
                'selection',

        ]},
    ];

    displaySquareContent: CssContent[] = [
        {
            shape: 'simple square',
            projectedCSSShape: `<div style="width: 100px; height: 100px; background-color: lightblue; padding: 20px; border: 2px solid navy;">This is a simple square.</div>`,
            cssCode: `
  // HTML
     <div class="simple-box">This is a simple square.</div>

  // CSS
    .simple-box {
      width: 100px;
      height: 100px;
      background-color: lightblue;
      padding: 20px;
      border: 2px solid navy;
    }`
},
{
        shape: 'Rounded Box',
        projectedCSSShape: `<div style="border-radius: 10px; background-color: lightgreen; padding: 20px; border: 2px solid green; width: 100px; height: 100px;" >Rounded Box</div>`,
        cssCode: `
        // HTML
        <div class="rounded-box">Rounded Box</div>

        // CSS
        .rounded-box {
            border-radius: 10px;
            background-color: lightgreen;
            padding: 20px;
            border: 2px solid green;
            width: 100px;
            height: 100px;
        }
        `
},
{
    shape: 'Shadow Box',
    projectedCSSShape: `<div style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); background-color: lightgray; padding: 20px; border: 2px solid gray; width: 100px; height: 100px;" >Shadow Box</div>`,  
    cssCode: `
    // HTML
    <div class="shadow-box">Shadow Box</div>

    // CSS
    .shadow-box {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        background-color: lightgray;
        padding: 20px;
        border: 2px solid gray;
        width: 100px;
        height: 100px;
    }
    `
},
{
    shape: 'Gradient Box',
    projectedCSSShape: `<div style="background: linear-gradient(45deg, #ff0000, #0000ff); padding: 20px; border: 2px solid navy; width: 100px; height: 100px;" >Gradient Box</div>`,
    cssCode: `
    // HTML
    <div class="gradient-box">Gradient Box</div>

    // CSS
    .gradient-box {
        background: linear-gradient(45deg, #ff0000, #0000ff);
        padding: 20px;
        border: 2px solid navy;
        width: 100px;
        height: 100px;
    }    
    `
},
{
    shape: 'Transparent(Opacity) Box',
    projectedCSSShape: `<div style="background-color: rgba(255, 0, 0, 0.5); padding: 20px; border: 2px solid navy; width: 100px; height: 100px;" >Transparent Box</div>`,
    cssCode: `
    // HTML
    <div class="transparent-box">Transparent Box</div>

    // CSS
    .transparent-box {
        background-color: rgba(255, 0, 0, 0.5);
        padding: 20px;
        border: 2px solid navy;
        width: 100px;
        height: 100px;
        opacity: 0.5;
    }`
},
{
    shape: `Bordered Box`,
    projectedCSSShape: `<div style="border: 2px dashed navy; background-color: lightyellow; padding: 20px; width: 100px; height: 100px;" >Bordered Box</div>`,
    cssCode: `
    // HTML
    <div class="bordered-box">Bordered Box</div>

    // CSS
    .bordered-box {
        border: 2px dashed navy;
        padding: 20px;
        background-color: lightyellow;
        width: 100px;
        height: 100px;
    }    
    `
},
{
    shape: `Hover Effect Box`,
    projectedCSSShape: `<div style="width: 200px; height: 100px; background-color: lightgreen; padding: 20px; text-align: center; transition: background 0.3s ease-in-out;" 
     onmouseover="this.style.backgroundColor='darkgreen'; this.style.color='white';" 
     onmouseout="this.style.backgroundColor='lightgreen'; this.style.color='black';">Hover Effect Box</div>`,
    cssCode: `
    // HTML
    <div class="hover-box">Hover Effect Box</div>

    // CSS
    .hover-box {
       width: 200px;
  height: 100px;
  background-color: lightgreen;
  padding: 20px;
  text-align: center;
  transition: background 0.3s ease-in-out;
    }

  .hover-box:hover {
  background-color: darkgreen;
  color: white;
}
    `
},
{
    shape: `Image Background Box`,
    projectedCSSShape: `<div style="background-image: url('assets/image/css.png'); border: 2px solid navy; background-size: cover; padding: 20px; width: 100px; height: 100px;" >Image Background Box</div>`,
    cssCode: `
    // HTML
    <div class="image-box">Image Background Box</div>

    // CSS
    .image-box {
        background-image: url('assets/image/css.png');
        background-size: cover;
        padding: 20px;
        width: 100px;
        height: 100px;
        border: 2px solid navy;
    }`
},
{
    shape: `Float Box`,
    projectedCSSShape: `<div style="float: right; width: 100px; height: 100px; background-color: lightblue; padding: 20px; border: 2px solid navy;" >Float Box</div>`,
    cssCode: `
    // HTML
    <div class="float-box">Float Box</div>

    // CSS
    .float-box {
        float: right;
        width: 100px;
        height: 100px;
        background-color: lightblue;
        padding: 20px;
        border: 2px solid navy;
    }`
},
{
    shape: `Animated Box`,
    projectedCSSShape: `<div style="width: 100px; height: 100px; background-color: orange; padding: 20px; text-align: center; transition: transform 0.3s ease-in-out; " onmouseover="this.style.transform='scale(1.1)';" 
     onmouseout="this.style.transform='scale(1)';" >Animated Box</div>`,
    cssCode: `
    // HTML
    <div class="animated-box">Animated Box</div>

    // CSS
 .animated-box {
  width: 100px;
  height: 100px;
  background-color: orange;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease-in-out;
}

.animated-box:hover {
  transform: scale(1.1);
}`
}
    ];

}
