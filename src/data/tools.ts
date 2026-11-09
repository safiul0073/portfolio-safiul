import type { Tool } from "@/types";

export const tools: Tool[] = [
    {
        id: 1,
        slug: "bangla-plagiarism-checker",
        name: "Bangla Assignment Plagiarism Checker",
        type: "Academic language tool",
        platform: "Web application",
        description:
            "A Bengali-language plagiarism checking application that accepts PDF files or text, extracts Bengali content with OCR, and compares submissions for similarity.",
        highlights: [
            "Built a Bengali-focused plagiarism workflow for an area where most existing tools primarily support English content.",
            "Implemented PDF and image text extraction using Tesseract OCR, pytesseract, Pillow, and Bengali trained data.",
            "Used Levenshtein distance and NLTK-assisted text processing to calculate similarity between submitted content.",
            "Supported text input and multiple-file workflows through a Django and Bootstrap web interface.",
            "Received the Best Project Award as a university final-year project.",
        ],
        technologies: ["Python", "Django", "Tesseract OCR", "NLTK", "Pillow", "Bootstrap"],
        github: "https://github.com/safiul0073/plagiarism-checker",
        featured: true,
    },
    {
        id: 2,
        slug: "image-replacer-macos",
        name: "Image Replacer",
        type: "Native macOS utility",
        platform: "macOS 13+",
        description:
            "A native macOS application for replacing placeholder image contents in bulk while preserving destination filenames, extensions, and folder paths exactly.",
        highlights: [
            "Built natively with Swift and SwiftUI without Electron, Node.js, Python, or third-party runtime dependencies.",
            "Added source and destination filtering, individual selection, manual one-to-one pairing, configurable sorting, and mapping previews.",
            "Implemented resizing, center crop, fit and stretch modes, JPEG quality control, and output formats based on destination extensions.",
            "Created backup manifests and restore workflows so replaced destination images can be recovered safely.",
            "Used native folder pickers and security-scoped bookmarks for sandbox-friendly persistent folder access.",
        ],
        technologies: ["Swift", "SwiftUI", "AppKit", "Xcode", "GitHub Actions"],
        github: "https://github.com/safiul0073/ImageReplacer",
        featured: true,
    },
    {
        id: 3,
        slug: "zipper-macos",
        name: "Zipper",
        type: "Native macOS utility",
        platform: "macOS",
        description:
            "A focused macOS utility for creating and extracting clean ZIP archives without unwanted Finder metadata, while preserving useful project dotfiles.",
        highlights: [
            "Removes .DS_Store, __MACOSX, and AppleDouble files while keeping useful files such as .env and .gitignore.",
            "Respects nested .gitignore rules and always excludes .git and .github directories from generated archives.",
            "Supports drag and drop, native file pickers, automatic output naming, and Finder reveal actions.",
            "Includes a command-line helper for Finder Quick Actions and multi-file compression workflows.",
            "Separates the SwiftUI application, archive service, CLI helper, packaging scripts, and automated archive tests.",
        ],
        technologies: ["Swift", "SwiftUI", "Foundation", "Swift Package Manager", "Shell"],
        github: "https://github.com/safiul0073/Zipper-mac",
        featured: true,
    },
    {
        id: 4,
        slug: "bijoy-mac",
        name: "BijoyMac — Bangla Bijoy for macOS",
        type: "Native macOS Input Method",
        platform: "macOS 12+",
        description:
            "A native Bengali keyboard input method for macOS bringing the familiar Bijoy typing layout (ANSI SutonnyMJ & Unicode) with zero external runtime dependencies.",
        highlights: [
            "Built natively in Swift using InputMethodKit, integrating directly into the macOS text input subsystem and menu bar switcher.",
            "Supports the traditional Bijoy layout for both ANSI (SutonnyMJ) and modern Unicode Bengali typing.",
            "Engineered with accurate Bengali conjunct (যুক্তবর্ণ) sequences, vowel matras, and low-latency keystroke handling.",
            "Packaged with a drag-and-drop DMG installer targeting ~/Library/Input Methods with guided privacy permissions.",
            "Includes SutonnyMJ font setup and quick input switching via standard macOS shortcuts (Ctrl + Option + Space).",
        ],
        technologies: ["Swift", "InputMethodKit", "macOS", "Xcode", "Shell"],
        github: "https://github.com/safiul0073/bijoy-mac",
        featured: true,
    },
];
