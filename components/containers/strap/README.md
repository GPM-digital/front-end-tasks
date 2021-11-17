## Strap Feature Component

### Theme

This component needs to accept a `theme` property with the following structure:

```json
{
  "background": "colour name from brand palette",
  "accent": "colour name from brand palette"
}
```

The background value will be used for the background. The Accent value is used for the action button. The foreground colour of both container and button should change based on their background values to maintain readability.

The colour values have already been defined in the `tailwind.config.js` file.

### Layout variations

This component needs to accept a `layout` property that determines the position of the image compared to the text. The two possible values are `image-text` / `text-image`.

If there is no image, the text needs to expand to take the full width of the container

Default layout value is `image-text`

---

### Guidelines

1. Semantic and accessible markup
2. Responsive styles using twin.macro
3. Reusable components / styles. You should be able to share components between containers

### Notes

- Sample images are included in the assets folder, feel free to use your own
- Sample data is being loaded from `/data/strap.json`. Feel free to add more examples to that file
