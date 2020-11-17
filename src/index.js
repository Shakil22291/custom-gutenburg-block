const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, MediaUpload, ColorPalette } = wp.editor;
const { PanelBody, IconButton } = wp.components;

registerBlockType('myblock/custom-cta', {
  title: 'Call to Action',
  descrioption: 'Block to generate a custom call to action',
  icon: 'format-image',
  category: 'layout',
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h2',
    },
    titleColor: {
      type: 'string',
      default: '#000000',
    },
    backgroundImage: {
      type: 'string',
      default: null,
    },
    body: {
      type: 'string',
      source: 'html',
      selector: 'p',
    },
  },
  edit({ attributes, setAttributes }) {
    const { title, body, titleColor, backgroundImage } = attributes;

    function onChangeTitle(value) {
      setAttributes({ title: value });
    }
    function onChangeBody(value) {
      setAttributes({ body: value });
    }

    function onTitleColorChange(color) {
      setAttributes({ titleColor: color });
    }

    function onSelectImage(image) {
      setAttributes({ backgroundImage: image.sizes.full.url });
    }

    return [
      <InspectorControls>
        <PanelBody title="Font Color settings">
          <p>
            <strong>Select Title color</strong>
          </p>
          <ColorPalette value={titleColor} onChange={onTitleColorChange} />
        </PanelBody>
        <PanelBody title="Background Settings">
          <p>
            <strong>Select Background Image</strong>
          </p>
          {/* <MediaUpload
            onSelect={onSelectImage}
            type="image"
            value={backgroundImage}
            render={({ open }) => {
              <IconButton onClick={open} icon="upload">
                {' '}
                Background Image{' '}
              </IconButton>;
            }}
          /> */}
        </PanelBody>
      </InspectorControls>,

      <div className="cta-container">
        <RichText
          key="editable"
          tagName="h2"
          placeholder="Your cta title"
          value={title}
          onChange={onChangeTitle}
          style={{ color: titleColor }}
        />

        <RichText
          key="editable"
          tagName="p"
          placeholder="Your cta body"
          value={body}
          onChange={onChangeBody}
        />
      </div>,
    ];
  },
  save({ attributes }) {
    const { title, body, titleColor } = attributes;

    return (
      <div className="cta-container">
        <h2 style={{ color: titleColor }}> {title} </h2>
        <RichText.Content tagName="p" value={body} />
      </div>
    );
  },
});
