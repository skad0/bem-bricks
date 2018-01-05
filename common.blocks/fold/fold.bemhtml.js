block('fold')(
    js()(true),
    content()((node, ctx) => {
        const foldHeight = ctx.foldHeight;

        if (!foldHeight) return applyNext();

        return [].concat(
            {
                elem: 'container',
                attrs: { style: `height: ${ctx.foldHeight}px` },
                content: applyNext(),
            },
            ctx.foldHeight && {
                elem: 'show',
                js: true,
                content: ctx.expander || [
                    {
                        elem: 'expander'
                    },
                    {
                        elem: 'read-more',
                        content: ctx.moreText || 'Читать далее'
                    }
                ]
            }
        );
    })
);
