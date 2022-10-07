const attributes = {
    form_id :{
        type: 'string',
        default: '0'
    },
    form_list_data: {
        type : 'array',
        default: [{
            value: "0",
            label: "Select MRM Form"
        },{
            value: "1",
            label: "Demo Select"
        },]
    },
    render_block: {
        type : 'string',
        default : ''
    },


};

export default attributes;
