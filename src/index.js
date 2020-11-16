const { registerBlockType } = wp.blocks;

registerBlockType('myblock/custom-cta', {
  title: 'Call to Action',
  descrioption: 'Block to generate a custom call to action',
  icon: 'format-image',
  category: 'layout',
  attributes: {},
  edit() {
    return (
      <div>
        <h2>Hello world</h2>
      </div>
    );
  },
  save() {},
});
