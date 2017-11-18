    <template>
        <div>
            <div id="editor">
                <mavon-editor style="height: 100%" v-on:change = 'showHtml' my-message='propsMsg'></mavon-editor>
            </div>

            
        </div>
    </template>
    <script>
    // Local Registration
    // import mavonEditor from 'mavon-editor'
    var mavonEditor = require('mavon-editor')
    import 'mavon-editor/dist/css/index.css'
    export default {
        name: 'editor',
        components: {
            'mavon-editor': mavonEditor.mavonEditor
        },
        methods: {
            showHtml: function(cVal,oVal){
                console.log(oVal)
            }
        },
        props: {
            toolbars:{
                header: false,
                superscript: false,
                subscript: false
            }
        },
        data(){
            return {
                propsMsg:{
                    header: false,
                    superscript: false,
                    subscript: false
                }
            }
        }
    }
    </script>
    <style>
    #editor {
        margin: auto;
        width: 80%;
        height: 580px;
    }
    </style>