export default[
    {
    name : 'Blog Title',
    desc : 'An AI tool that generate blog title depends on your blog information',
    category : 'Blog',
    icon : 'https://cdn-icons-png.flaticon.com/128/2460/2460851.png',
    slug : 'generate-blog-title',
    aiPrompt : 'Give me 5 blog topic ideas in bullet wise only based on give niche topic and give me result in Rich Text editor format',
    form: [
        {
            label:'Enter your blog niche',
            field:'input',
            name:'niche',
            required:true
        },
        {
            label:'Enter blog outline',
            field:'textarea',
            name:'outline'
        }
    ]

    },


    {
        name : 'Blog Content',
        desc : 'An AI tool that generate blog post depends on your blog information',
        category : 'Blog',
        icon : 'https://cdn-icons-png.flaticon.com/128/10473/10473118.png',
        slug : 'blog-content-generation',
        aiPrompt : 'Generate Blog Content based on topic and outline ',
        form: [
            {
                label:'Enter your blog topic',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label:'Enter blog Outline here',
                field:'textarea',
                name:'outline'
            }
        ]
        },



        {
            name : 'Blog Topic Ideas',
            desc : 'An AI tool that serves as your personal blog post title',
            category : 'Blog',
            icon : 'https://cdn-icons-png.flaticon.com/128/9836/9836465.png',
            slug : 'blog-topic-idea',
            aiPrompt : 'Give me 5 blog topic ideas in bullet wise only based on give niche topic and give me result in Rich Text editor format',
            form: [
                {
                    label:'Enter your Niche',
                    field:'input',
                    name:'niche',
                    required:true
                },
            ]
        
            },


            {
                name : 'Youtube SEO Title',
                desc : 'An AI tool that generate blog title depends on your blog information',
                category : 'Youtube Tools',
                icon : 'https://cdn-icons-png.flaticon.com/128/2522/2522649.png',
                slug : 'youtube-seo-title',
                aiPrompt : 'Give me Best SEO optimized high ranked 5 title ideas',
                form: [
                    {
                        label:'Enter your youtube video topic keywords',
                        field:'input',
                        name:'keywords',
                        required:true
                    },
                    {
                        label:'Enter youtube description Outline here',
                        field:'textarea',
                        name:'outline'
                    }
                ]
                },

            
            {
                name : 'Youtube Description',
                desc : 'An AI tool that generate blog title depends on your blog information',
                category : 'Youtube Tool',
                icon : 'https://cdn-icons-png.flaticon.com/128/15302/15302398.png',
                slug : 'youtube-description',
                aiPrompt : 'Generate Youtube description with emoji',
                form: [
                    {
                        label:'Enter your blog topic/title',
                        field:'input',
                        name:'topic',
                        required:true
                    },
                    {
                        label:'Enter youtube description Outline here',
                        field:'textarea',
                        name:'outline'
                    }
                ]
                },

            
            {
                name : 'Youtube Tags',
                desc : 'An AI tool that generate blog title depends on your blog information',
                category : 'Youtube Tool',
                icon : 'https://cdn-icons-png.flaticon.com/128/10884/10884883.png',
                slug : 'youtube-tag',
                aiPrompt : 'Generate 10 Youtube tags in bullet points based on niche topic and give me result in Rich Text editor format',
                form: [
                    {
                        label:'Enter your blog title',
                        field:'input',
                        name:'title',
                        required:true
                    },
                    {
                        label:'Enter youtube video Outline here (Optional)',
                        field:'textarea',
                        name:'textToImprove'
                    }
                ]
                },


            {
                name : 'Add Emojis To Text',
                desc : 'An AI tool that generate blog title depends on your blog information',
                category : 'blog',
                icon : 'https://cdn-icons-png.flaticon.com/128/17985/17985564.png',
                aiPrompt : 'Add Emoji to outline text depends on outline ',
                slug : 'add-emoji-to-text',
                form: [
                    {
                        label:'Enter your text to add emojis',
                        field:'textarea',
                        name:'outline',
                        required:true
                    },
                ]
                },


                {
                    name : 'Rewrite Article (Plagiarism Free)',
                    desc : 'An AI tool that generate blog title depends on your blog information',
                    category : 'Rewriting Tool',
                    icon : 'https://cdn-icons-png.flaticon.com/128/15972/15972671.png',
                    aiPrompt : 'Add Emoji to outline text depends on outline ',
                    slug : 'rewrite-article',
                    form: [
                        {
                            label:'Enter your text to add emojis',
                            field:'textarea',
                            name:'outline',
                            required:true
                        },
                    ]
                    },
]