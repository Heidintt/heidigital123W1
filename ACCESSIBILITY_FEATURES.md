# Accessibility Features Documentation

## Skip to Main Content

### What is "Skip to Main Content"?

The "Skip to Main Content" link is an essential web accessibility feature that allows users to bypass the navigation menu and jump directly to the main content of the page.

### Why Does This Feature Exist?

**For Users with Disabilities:**
- **Keyboard Users**: People who navigate using only the keyboard (due to motor disabilities) don't have to tab through all navigation links to reach the main content
- **Screen Reader Users**: Blind and visually impaired users using screen readers can quickly skip repetitive navigation elements
- **Motor Impairments**: Users with limited mobility can access content more efficiently

**For Legal Compliance:**
- **WCAG 2.1 Guidelines**: Required for Level A compliance (Success Criterion 2.4.1 - Bypass Blocks)
- **ADA Compliance**: Helps meet Americans with Disabilities Act requirements
- **Australian DDA**: Supports Disability Discrimination Act compliance
- **Section 508**: Required for US government websites

### How It Works

1. **Hidden by Default**: The link is invisible to sighted users during normal browsing
2. **Appears on Focus**: When users press Tab (keyboard navigation), the link becomes visible
3. **Jumps to Content**: Clicking or pressing Enter takes users directly to the main content area
4. **Screen Reader Accessible**: Always available to assistive technologies

### Current Implementation

**Location**: `index.html` (lines 170-173)
```html
<!-- Skip to main content for accessibility -->
<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-[9999]">
  Skip to main content
</a>
```

**Target Element**: `src/pages/Index.tsx` (line 61)
```html
<main role="main" id="main-content">
```

**CSS Classes Explanation:**
- `sr-only`: Hidden from visual display but available to screen readers
- `focus:not-sr-only`: Becomes visible when focused (keyboard navigation)
- `focus:absolute focus:top-4 focus:left-4`: Positioning when visible
- `bg-blue-600 text-white px-4 py-2 rounded`: Styling (blue background, white text, padding, rounded corners)
- `z-[9999]`: High z-index to appear above other elements

### Testing the Feature

**Keyboard Testing:**
1. Load the webpage
2. Press the `Tab` key once
3. The "Skip to Main Content" button should appear at the top-left
4. Press `Enter` to activate it
5. The page should scroll to the main content area

**Screen Reader Testing:**
1. Use a screen reader (NVDA, JAWS, VoiceOver)
2. Navigate to the page
3. The first link announced should be "Skip to main content"
4. Activate the link to jump to main content

### Current Status

✅ **Functionality**: Working correctly - link successfully jumps to #main-content  
✅ **Screen Reader Access**: Available to assistive technologies  
✅ **WCAG Compliance**: Meets accessibility guidelines  
⚠️ **Visual Display**: May have visibility issues when focused (need investigation)

### Recommendations

**Do NOT Remove This Feature** - It is:
- Required for accessibility compliance
- Essential for users with disabilities
- A web development best practice
- Legally required in many jurisdictions

**If Visual Issues Exist:**
- Investigate CSS conflicts with navigation positioning
- Ensure proper z-index stacking
- Test across different browsers and devices
- Consider adding more prominent styling for better visibility

### Additional Resources

- [WebAIM: Skip Navigation Links](https://webaim.org/techniques/skipnav/)
- [WCAG 2.1 Success Criterion 2.4.1](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html)
- [Australian Government Digital Service Standard](https://www.dta.gov.au/help-and-advice/digital-service-standard)