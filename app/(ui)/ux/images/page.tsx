import CodeHighlight from "@/app/components/CodeHighlight";
import ModuleWrapper from "@/app/components/ModuleWrapper";

export default function Images() {
  return (
    <ModuleWrapper>
      <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
        <h1>Images</h1>
        <p>
          Images play a crucial role in web design by enhancing aesthetics,
          conveying messages, and improving user engagement. When used
          effectively, images can make a website more attractive and memorable.
          However, it’s important to use images thoughtfully to ensure fast
          loading times and a good user experience. This tutorial covers
          everything from choosing the right image formats to optimizing images
          for the web, as well as tips for using images in CSS.
        </p>
        <hr />
        <h3>Why Use Images in Web Design?</h3>
        <p>Images are essential in web design for several reasons:</p>
        <ul>
          <li>
            <strong>Visual Appeal</strong>: Images can make a website more
            engaging and visually appealing.
          </li>
          <li>
            <strong>Brand Identity</strong>: High-quality images can reinforce a
            brand&#39;s identity and create a sense of professionalism.
          </li>
          <li>
            <strong>Communication</strong>: A picture is worth a thousand words.
            Images can communicate messages faster than text.
          </li>
          <li>
            <strong>User Engagement</strong>: People are naturally drawn to
            images, and they can help to keep visitors on your site longer.
          </li>
        </ul>
        <h3>Common Image Formats for the Web</h3>
        <p>
          Choosing the right image format is crucial for balancing image quality
          and file size. Here are the most common formats:
        </p>
        <ul>
          <li>
            <p>
              <strong>JPEG (or JPG)</strong>:
            </p>
            <ul>
              <li>Best for photographs and complex images.</li>
              <li>Supports millions of colors.</li>
              <li>
                Offers compression but may lose some image quality (lossy).
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>PNG</strong>:
            </p>
            <ul>
              <li>
                Supports transparency, making it great for logos, icons, and
                illustrations.
              </li>
              <li>Higher quality than JPEG but larger file sizes.</li>
              <li>Useful for images with text or flat colors.</li>
            </ul>
          </li>
          <li>
            <p>
              <strong>GIF</strong>:
            </p>
            <ul>
              <li>Supports animations.</li>
              <li>Limited to 256 colors, making it unsuitable for photos.</li>
              <li>Best used for simple animations or small graphics.</li>
            </ul>
          </li>
          <li>
            <p>
              <strong>SVG</strong>:
            </p>
            <ul>
              <li>
                Scalable Vector Graphics, ideal for icons, logos, and
                illustrations.
              </li>
              <li>
                Vector-based, meaning it scales well at any size without losing
                quality.
              </li>
              <li>
                Small file sizes, but not suitable for complex images or photos.
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>WebP</strong>:
            </p>
            <ul>
              <li>
                A newer format offering better compression than JPEG and PNG.
              </li>
              <li>
                Supports both lossy and lossless compression as well as
                transparency.
              </li>
              <li>
                Not supported by all browsers, but fallback options can be
                provided.
              </li>
            </ul>
          </li>
        </ul>
        <h3>Optimizing Images for Better Performance</h3>
        <p>
          Optimizing images helps improve website speed and user experience.
          Here are some ways to optimize images:
        </p>
        <ul>
          <li>
            <strong>Compress Images</strong>: Use tools like{" "}
            <a href="https://tinypng.com/">TinyPNG</a>,{" "}
            <a href="https://imageoptim.com/">ImageOptim</a>, or{" "}
            <a href="https://squoosh.app/">Squoosh</a> to reduce file size
            without losing too much quality.
          </li>
          <li>
            <strong>Resize Images</strong>: Avoid using images that are larger
            than they need to be. Resize them to the dimensions required by your
            layout.
          </li>
          <li>
            <strong>Use Appropriate Formats</strong>: Choose formats that match
            your needs (e.g., JPEG for photos, PNG for images with
            transparency).
          </li>
          <li>
            <strong>Lazy Loading</strong>: Load images only when they appear in
            the user’s viewport. You can use the{" "}
            <code>loading=&quot;lazy&quot;</code> attribute in HTML for this
            purpose.
          </li>
        </ul>
        <CodeHighlight
          content={`
<img src="image.jpg" alt="Description" loading="lazy">
`}
          sandboxOption={false}
        />
        <h3>Using Images in HTML</h3>
        <p>
          To display images in HTML, use the <code>&lt;img&gt;</code> tag:
        </p>
        <CodeHighlight
          content={`
<img src="image.jpg" alt="A beautiful sunrise over the mountains" width="600" height="400">
`}
          sandboxOption={false}
        />
        <ul>
          <li>
            <strong>
              <code>src</code>
            </strong>
            : The path to the image file.
          </li>
          <li>
            <strong>
              <code>alt</code>
            </strong>
            : Alternative text that describes the image, which is important for
            accessibility and SEO.
          </li>
          <li>
            <strong>
              <code>width</code> and <code>height</code>
            </strong>
            : Specify the image’s dimensions to help browsers render the layout
            faster.
          </li>
        </ul>
        <h3>Using Images in CSS</h3>
        <p>
          Images can be used as background elements in CSS, allowing you more
          flexibility in positioning and styling:
        </p>
        <CodeHighlight
          content={`
body {
    background-image: url('background.jpg');
    background-size: cover; /* Scale the background image to cover the entire area */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Prevent the image from repeating */
}
`}
          sandboxOption={false}
        />
        <ul>
          <li>
            <strong>
              <code>background-image</code>
            </strong>
            : Adds an image as a background to an element.
          </li>
          <li>
            <strong>
              <code>background-size</code>
            </strong>
            : <code>cover</code> scales the image to cover the entire area,
            while <code>contain</code> scales it to fit within the area.
          </li>
          <li>
            <strong>
              <code>background-position</code>
            </strong>
            : Specifies where the image should be positioned.
          </li>
          <li>
            <strong>
              <code>background-repeat</code>
            </strong>
            : Determines whether the background image should repeat.
          </li>
        </ul>
        <h3>Responsive Images</h3>
        <p>
          Responsive images adjust to different screen sizes and resolutions,
          improving the user experience on all devices. Here’s how to implement
          responsive images:
        </p>
        <h4>
          1.{" "}
          <strong>
            Using the <code>srcset</code> Attribute
          </strong>
        </h4>
        <CodeHighlight
          content={`
<img 
    src="image-small.jpg" 
    srcset="image-small.jpg 480w, image-medium.jpg 800w, image-large.jpg 1200w" 
    sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px" 
    alt="A scenic view">
`}
          sandboxOption={false}
        />
        <ul>
          <li>
            <strong>
              <code>srcset</code>
            </strong>
            : Specifies different image files for different screen resolutions.
          </li>
          <li>
            <strong>
              <code>sizes</code>
            </strong>
            : Defines how much space the image should occupy depending on the
            viewport size.
          </li>
        </ul>
        <h4>
          2.{" "}
          <strong>
            Using the <code>&lt;picture&gt;</code> Element
          </strong>
        </h4>
        <CodeHighlight
          content={`
<picture>
    <source srcset="image.webp" type="image/webp">
    <source srcset="image.jpg" type="image/jpeg">
    <img src="image.jpg" alt="A beautiful scene">
</picture>
`}
          sandboxOption={false}
        />
        <ul>
          <li>
            The <code>&lt;picture&gt;</code> element allows you to provide
            multiple image formats. The browser will choose the most suitable
            one.
          </li>
        </ul>
        <h3>Practical Tips for Using Images in Web Design</h3>
        <ul>
          <li>
            <strong>Use High-Quality Images</strong>: Blurry or pixelated images
            can make a site look unprofessional. Use high-resolution images but
            optimize them for fast loading.
          </li>
          <li>
            <strong>Maintain Consistency</strong>: Use images that align with
            your brand&#39;s visual style. This consistency helps reinforce your
            brand’s identity.
          </li>
          <li>
            <strong>Focus on Accessibility</strong>: Always include{" "}
            <code>alt</code> text for images, especially for those that convey
            important content. This helps users who rely on screen readers.
          </li>
          <li>
            <strong>Think About Layout</strong>: Use images that fit the layout
            of your design. Cropped or poorly positioned images can disrupt the
            visual flow of a page.
          </li>
          <li>
            <strong>Avoid Image Overload</strong>: Too many images can slow down
            your website. Use them sparingly and ensure they add value to the
            content.
          </li>
        </ul>
        <h3>Conclusion</h3>
        <p>
          Images are a key part of web design, capable of transforming the look
          and feel of a website. By understanding the different image formats,
          optimizing them for performance, and using responsive techniques, you
          can create beautiful and user-friendly websites. Always keep the
          balance between aesthetics and performance in mind, and use images to
          enhance the overall user experience.
        </p>
      </div>
    </ModuleWrapper>
  );
}
