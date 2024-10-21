export default  ()=>{
    return {
        name: 'rollup:style-plugin',
        transform(code, id) {
            console.log('transform----------------------------------', id)
            return code
        },
        generateBundle(options_, bundle){
            console.log(' rollup:style-plugin generateBundle ----------------------------------', options_, bundle)
            this.emitFile({
                type: 'asset',
                source: 'hello world',
                fileName: 'hello.txt'
            })
        }
    }
}