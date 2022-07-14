export default {
    name: 'pin',
    title: 'pin',
    type: 'document',
    fields:[
        {name:'title', title:'Title', type:'string'},
        {name:'about', title:'About', type:'string'},
        {name:'destination', title:'Destination', type:'url'},
        {name:'category', title:'Category', type:'assocCategory'},
        {name:'image', title:'Image', type:'image',options:{hotspot:true}},
        {name:'userId', title:'User Id', type:'string'},
        {name: 'save', title:'Save', type:'array', of:[{type:'save'}]},
        {name: 'comments', title:'Comments', type:'array', of:[{type:'comment'}]}
    ]
}