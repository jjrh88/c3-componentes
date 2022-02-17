export const config = {
    url:'http://localhost:3000',
    /* menuComponent:{
       home:'Home',
       service:'Service',
       team:'Team',
       pricing:'Pricing',
       testimonial:'Testimonial',
       contact:'Contact',
    }*/
    menuComponent:[
        { nombre:'Home', url:'#hero-area' },
        { nombre:'Service', url:'#services' },
        { nombre:'Team', url:'#team' },
        { nombre:'Pricing', url:'#pricing' },
        { nombre:'Testimonial', url:'#testimonial' },
        { nombre:'Contact', url:'#contact' }
    ],
    estadisticasComponent:{
        manageStatistics:'Manage Statistics',
        detailedStatisticsCompany:'Detailed Statistics of your Company',
        praesentImperdiet:`Praesent imperdiet, tellus et euismod euismod, risus lorem euismod erat,
                           at finibus neque odio quis metus. Donec vulputate arcu quam. Morbi quis tincidunt ligula.
                           Sed rutrum tincidunt pretium. Mauris auctor, purus a pulvinar fermentum, odio dui vehicula lorem,
                           nec pharetra justo risus quis mi. Ut ac ex sagittis, viverra nisl vel, rhoncus odio.`
    },
    utilTextComponents:{
        readMore:'Read More'  
    }
}