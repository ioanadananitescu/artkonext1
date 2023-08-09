export const size = [
    {
        id: 1,
        name: 'Small'
    },
    {
        id: 2,
        name: 'Medium'
    },
    {
        id: 3,
        name: 'Big'
    },
    {
        id: 4,
        name: 'Large'
    }
];



export const medium = [
    {
        id: 1,
        name: 'Oil'
    }, 
    {
        id: 2, 
        name: 'Watercolor'
    }, 
    {
        id: 3,
        name:'Drawing'
    }, 
    {
        id: 4, 
        name: 'Sculpture'
    },
    {
        id: 5, 
        name: 'Acrylic'
    }, 
    {
    id: 6, 
    name: 'Digital'
}, 
{
    id: 7, 
    name: 'Poster'
}, 
{
    id: 8, 
    name: 'Gesso'
}, 
{
    id: 9, 
    name: 'Marker'
}, 
{
    id: 10, 
    name: 'Textile'
}, 
{
id: 11, 
name: 'Photo'
}, 
{
id: 12, 
name: 'Ballpoint pen'
}, 
];
export const select =[
    {
        id:1,
        name: "Size",
        child: [
            {
                id:1,
                name: "small"                
            },
            {
                id:1,
                name: "medium"                
            },
            {
                id:1,
                name: "big"                
            }
        ]
    }, 
    {
        id:2,
        name: "Color",
        child: [
            {
                id:1,
                name: "red"                
            },
            {
                id:2,
                name: "blue"                
            },
            {
                id:3,
                name: "yellow"                
            },
            {
                id:4,
                name: "gray"                
            }
        ]
    },
    {
        id:3,
        name: "Price",
        child: [
            {
                id:1,
                name: "<500"                
            },
            {
                id:1,
                name: "501-1000"                
            },
            {
                id:1,
                name: ">1000"                
            },
        ]
    }

]