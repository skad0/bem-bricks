# Fold

Simple block for hiding part of the content by height.

## Fields
### foldHeight

Responsible for height of visible content.

### moreText

Text in default expander.

### expander

Element which will replace the default expander if you want to create custom.

## Usage

```javascript
{
    block: 'fold',
    foldHeight: 50,
    showText: 'Read more',
    content: [
        'Lorem ipsum dolor sit amet',
        {
            tag: 'p',
            content: [
                'consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                {
                    tag: 'br'
                },
                'ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
                {
                    tag: 'br'
                },
                'nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            ]
        },
        {
            tag: 'p',
            content: 'text'
        }
    ]
}
```
