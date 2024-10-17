"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import NavigationLinks from "@/app/components/NavigationLinks";

export default function Exercises1() {
  const [toggler, setToggler] = useState(false);

  return (
    <div className="flex max-w-[75ch] mx-4 sm:mx-auto flex-col gap-4 empty:hidden first:pt-[3px] lesson">
      <h1>Exercises</h1>
      <p>
        Congratulations on making it this far! To be honest, we scratched the
        surface on a lot of topics and this section was mainly to get you
        acquanted with the many topics we'll be covering in future modules.
      </p>
      <p>
        The real learning is by doing and this will be mainly done through
        repetition and by building things. The first exercise we'll do is to use
        HTML and CSS (JavaScript we'll put off for now) to replicate landing
        pages of some websites.
      </p>
      <p>
        One example is the Visual Studio Code landing page but you can pick any
        landing page. The important thing is for you to start building and to
        get acquanted with setting up a development environment and to
        familiarize yourself with HTML and CSS.
      </p>

      <button onClick={() => setToggler(!toggler)}>
        <img src="/vscode.png" />
      </button>
      <FsLightbox toggler={toggler} sources={["/vscode.png"]} />

      <p>
        From looking at the page, I see a navigation bar with a logo on the
        left, options in the middle, a input box and a button on the right. I
        would suggest creating a <code>div</code> and giving it a{" "}
        <code>display</code> property of <code>flex</code>. Something like{" "}
        <code>&lt;div style="display: flex"&gt;...&lt;/div&gt;</code>
      </p>
      <p>
        Then we have a middle section with text and buttons. The text and
        buttons are centered so instead of centering each individual lines of
        text and buttons, we can enclose all the text in a div and do{" "}
        <code>text-align: center</code> on it as you style each of the
        individual lines separately.
      </p>
      <p>
        Lastly, the bottom part is merely an image so you can right-click and
        save the image locally and link to it using an <code>img</code> tag. You
        will have to give the correct path to the image which will be an
        important thing to know how to do. You can view the{" "}
        <a href="/shell/paths">Paths module</a> for more information, namely on
        understanding relative paths.
      </p>
      <p>
        That should be enough to get you started. Once you complete this
        exercise, feel free to give it your own styling and play with some of
        the styling. You can also view other web pages and try to replicate what
        they have. Feel free to skip over sites that have animation effects or
        videos as that's more advanced and studies have shown, aren't really
        necessary and can actually be detrimental to the user experience.
      </p>
      <p>
        If you have any questions or need help, feel free to contact us in the
        Discord or email us.
      </p>
      <NavigationLinks
        prevLesson={{
          slug: "/foundations/js",
          title: "Introduction to JavaScript",
        }}
        nextLesson={null}
      />
    </div>
  );
}
