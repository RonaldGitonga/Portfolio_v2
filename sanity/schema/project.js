
export default{
    name:'project',
    title:'Project',
    type:'document',
    fields:[
    {
        name:'image',
        title:'Image',
        type:'array',
        of:[{type:'image'}],
        options:{
            hotpsot:true,
        }
    },

    {
        name:'name',
        title:'Name',
        type:'string'
    },
    
    {
        name:'link',
        title:'Link',
        type:'string'
    },
]
}