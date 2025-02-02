export interface CssContent{
    short: string;
    long: string;
};

export interface CssMainContent{
    short: string;
    list: string[];
};


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
      
       
    ]

}