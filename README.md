# Hullwater: the de-slop exercise

This repository holds a landing page for Hullwater, a fictional company that sells cold-brewed barley tea. 

The page was built with AI and no brand direction, on purpose, so it contains as many of the tells from *A guide to combatting AI slop* as one page can hold. Your job is to find the tells, decide what Hullwater should look and sound like, and then direct an AI agent to rebuild the page so that it fits the founder's brief.

## What you need

You need an AI coding agent set up on your computer. Claude Code is the recommended one, and the *Building with AI* handbook lists free alternatives. If you haven't had your setup 1:1 yet, book one before you start, since every step after the first two depends on a working agent.

You also need the rule files from the guide's *Rule files* page: `writing-rules.md`, `design-rules.md`, `interview.md`, and `review.md`.

## The client's brief

The client said this in your first meeting:

> "So the whole thing started because I'd get back from a run and there was nothing I actually wanted to drink. Everything in that fridge aisle is either sugar or it's, like, aggressively healthy. Big green label screaming at you about electrolytes. And I just wanted something clean. Genuinely clean, not clean in the marketing sense. My grandmother made this barley tea every summer, and it was barley and water and that was it, and it was the cleanest thing I've ever had.
>
> So that's the product. Cold-brewed, four ingredients, nothing hiding. I want someone to pick it up and know immediately there's nothing weird in it.
>
> The whole category is so loud. I want us to be the quiet one. Calm. I keep saying calm to people and they look at me funny, but the can should feel calm. Like you've already relaxed before you drink it. And honest, I guess. I don't want to overclaim anything. If it's barley and water, say barley and water."

The words the client repeated were clean, calm, quiet, and honest. Treat the brief as the only source of facts about Hullwater. If the client didn't say it, the page can't claim it.

## Step 1: Get the code

1. On this repository's GitHub page, click **Use this template**, then **Create a new repository**. Name it `hullwater` and create it in your account.
2. Open VS Code, open an empty folder, and send Claude Code this prompt with your repository's address filled in: "Clone https://github.com/YOUR-USERNAME/hullwater into this folder."
3. Open `index.html` in Chrome. You can double-click it in Finder, or ask the agent to open it for you.

## Step 2: Find the tells

Before you change anything, read the whole page and the code behind it, and list every tell you find in a new file called `TELLS.md`. Open each FAQ answer, and look at the page title and the comments in `index.html`, because some tells only show up in the code.

Use a table so you can check each one off later:

| Where it appears | What you see | Which tell it is |
| --- | --- | --- |
| Hero headline | "Not Just Tea. A Hydration Revolution." | Negative parallelism, fragments for emphasis |

Use the tell names from the guide's *Written tells* and *Visual tells* pages. Counting each place a tell appears, there are more than seventy, so keep going after the obvious ones.

## Step 3: Make the brand decisions yourself

Before you open your agent, decide what Hullwater should look and sound like, and write those decisions in a new file called `BRAND.md`. It should cover:

- the colors, with a hex code and a job for each one
- one or two Google Fonts, and where each one is used
- the voice, as a few words to aim for and a list of words to avoid
- what the page has to say: what's in the product, who it's for, and what you'd like the visitor to do
- which sections the page needs, and which of the current ones you'll cut

If you have time, design the top of the page in Figma as well, since an agent follows a frame far more closely than a description.

These decisions have to come from you. An agent that's left to decide what a calm, honest barley tea brand looks like will fill every gap with a default, and the result will be a different kind of slop.

## Step 4: Brief the agent and let it interview you

Copy `BRAND.md`, the rule files, and your Figma link (if you made one) into the project. Then send the agent the `interview.md` template from the guide, or this prompt:

"Read @BRAND.md, @writing-rules.md, and @design-rules.md, then read index.html. Before you change anything, ask me about every decision you'd otherwise have to make for yourself, and keep asking until nothing important is left open. When we're done, write the brief back to me so I can approve it."

Answer every question yourself.

## Step 5: Rebuild the page in small steps

Have the agent rebuild the top of the page first, then check it in the browser before you move on to the next section. Correct it with specific instructions, such as "use the accent color on the main button only," since a vague instruction like "make it better" brings in a new set of defaults.

You can cut whole sections. A barley tea company may not need a pricing grid, a stats banner, or a dashboard.

Once the structure and the content are settled, edit the copy by hand. Repeated rounds of AI editing tend to bring back the tells you removed, so the last pass on the writing should be yours.

## Step 6: Review your work

Run the two tests from the guide's *Workflow* page.

For the purpose test, look at every element and every sentence on the page and ask what it does for Hullwater. If the only answer is that it looks finished or sounds polished, remove it.

For the swap test, replace the name Hullwater with the name of another bottled tea brand. If the page still works without any other change, it hasn't been designed for Hullwater yet.

Then go back through `TELLS.md` and confirm that every tell is gone. If you'd like a second opinion, open a fresh session and give it the `review.md` template, because an agent that reviews its work in the same session tends to approve it.

## Rules

Don't ask the agent to "remove the AI slop" or to "make it look less like AI." A model that's told to avoid one set of defaults moves to another set, which is usually a cream background with a large serif headline, so every change you ask for has to come from a decision in `BRAND.md`.

Remove every claim that Hullwater can't back up, including the invented numbers, testimonials, and partner logos. The founder hasn't given you any of them.

## Submitting

Commit your changes and push them to your repository. If you've set up Vercel, publish the site as well. Then send me the link to your repository, the live link if you have one, and your `TELLS.md` and `BRAND.md` by [date].
