from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


OUTPUT = "output/pdf/safiul_cv_improved.pdf"
PAGE_W, PAGE_H = letter

NAVY = colors.HexColor("#0f172a")
BLUE = colors.HexColor("#2563eb")
SLATE = colors.HexColor("#334155")
MUTED = colors.HexColor("#64748b")
LIGHT = colors.HexColor("#e2e8f0")
SOFT = colors.HexColor("#f8fafc")
WHITE = colors.white


def wrap_text(text, font, size, width):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        test = word if not current else current + " " + word
        if stringWidth(test, font, size) <= width:
            current = test
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_wrapped(c, text, x, y, width, font="Helvetica", size=9, leading=12, color=SLATE):
    c.setFont(font, size)
    c.setFillColor(color)
    for line in wrap_text(text, font, size, width):
        c.drawString(x, y, line)
        y -= leading
    return y


def section_title(c, title, x, y, width, color=NAVY):
    c.setFillColor(color)
    c.setFont("Helvetica-Bold", 10.5)
    c.drawString(x, y, title.upper())
    c.setStrokeColor(BLUE)
    c.setLineWidth(1.2)
    c.line(x, y - 5, x + width, y - 5)
    return y - 18


def bullet_list(c, bullets, x, y, width, size=8.5, leading=11.2):
    for bullet in bullets:
        c.setFillColor(BLUE)
        c.circle(x + 2, y + 3, 1.5, stroke=0, fill=1)
        y = draw_wrapped(c, bullet, x + 10, y, width - 10, size=size, leading=leading)
        y -= 2.5
    return y


def chip(c, text, x, y):
    pad_x = 5
    w = stringWidth(text, "Helvetica", 7.6) + pad_x * 2
    c.setFillColor(colors.HexColor("#eff6ff"))
    c.roundRect(x, y - 9, w, 13, 3, stroke=0, fill=1)
    c.setFillColor(colors.HexColor("#1d4ed8"))
    c.setFont("Helvetica", 7.6)
    c.drawString(x + pad_x, y - 5.2, text)
    return x + w + 4


def draw_chips(c, items, x, y, width):
    start_x = x
    for item in items:
        item_w = stringWidth(item, "Helvetica", 7.6) + 10
        if x + item_w > start_x + width:
            x = start_x
            y -= 16
        x = chip(c, item, x, y)
    return y - 18


def header(c, page_num):
    c.setFillColor(NAVY)
    c.rect(0, PAGE_H - 98, PAGE_W, 98, stroke=0, fill=1)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 24 if page_num == 1 else 18)
    c.drawString(42, PAGE_H - 42, "Md Safiullah")
    c.setFont("Helvetica", 10)
    role = "Senior Full Stack Developer | Laravel, Next.js, React, Vue"
    c.drawString(42, PAGE_H - 61, role)
    contact = "Uttara, Dhaka, Bangladesh  |  +880 1876 150613  |  mdsafiul0073@gmail.com"
    c.drawString(42, PAGE_H - 78, contact)
    c.setFillColor(colors.HexColor("#bfdbfe"))
    c.setFont("Helvetica", 8.5)
    c.drawString(390, PAGE_H - 42, "linkedin.com/in/safiul0073")
    c.drawString(390, PAGE_H - 58, "github.com/safiul0073")
    c.drawString(390, PAGE_H - 74, "portfolio-safiul.vercel.app")
    c.linkURL("https://linkedin.com/in/safiul0073", (390, PAGE_H - 44, 540, PAGE_H - 34), relative=0)
    c.linkURL("https://github.com/safiul0073", (390, PAGE_H - 60, 520, PAGE_H - 50), relative=0)
    c.linkURL("https://portfolio-safiul.vercel.app", (390, PAGE_H - 76, 540, PAGE_H - 66), relative=0)


def job(c, company, role, location, dates, bullets, x, y, width):
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 10.2)
    c.drawString(x, y, company)
    c.setFont("Helvetica", 9)
    date_w = stringWidth(dates, "Helvetica", 9)
    c.drawString(x + width - date_w, y, dates)
    y -= 12
    c.setFillColor(MUTED)
    c.setFont("Helvetica-Oblique", 8.7)
    c.drawString(x, y, role)
    loc_w = stringWidth(location, "Helvetica-Oblique", 8.7)
    c.drawString(x + width - loc_w, y, location)
    y -= 12
    y = bullet_list(c, bullets, x, y, width, size=8.3, leading=10.6)
    return y - 3


def project(c, title, stack, link_label, bullets, x, y, width):
    c.setFillColor(NAVY)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(x, y, title)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 8.4)
    c.drawString(x + stringWidth(title, "Helvetica-Bold", 10) + 6, y, f"| {stack}")
    if link_label:
        c.setFillColor(BLUE)
        c.setFont("Helvetica", 8.4)
        lw = stringWidth(link_label, "Helvetica", 8.4)
        c.drawString(x + width - lw, y, link_label)
    y -= 12
    y = bullet_list(c, bullets, x, y, width, size=8.3, leading=10.7)
    return y - 4


def draw_page_one(c):
    header(c, 1)
    left_x, left_w = 42, 158
    right_x, right_w = 222, 348
    y_left = PAGE_H - 122
    y_right = PAGE_H - 122

    y_left = section_title(c, "Core Skills", left_x, y_left, left_w)
    y_left = draw_chips(
        c,
        [
            "PHP",
            "JavaScript",
            "TypeScript",
            "Laravel",
            "Next.js",
            "React",
            "Vue.js",
            "Node.js",
            "NestJS",
            "Express.js",
            "React Native",
            "MySQL",
            "PostgreSQL",
            "Redis",
            "Docker",
            "CI/CD",
            "AWS",
            "DigitalOcean",
            "RabbitMQ",
            "Prisma",
            "Drizzle",
            "Tailwind CSS",
        ],
        left_x,
        y_left,
        left_w,
    )

    y_left = section_title(c, "Strengths", left_x, y_left, left_w)
    y_left = bullet_list(
        c,
        [
            "Backend architecture and API design",
            "Reusable admin dashboards and templates",
            "Payment gateway integration",
            "Notification systems with email, SMS, and Firebase",
            "Performance tuning, caching, indexing, and query monitoring",
            "Team leadership, client communication, and delivery planning",
        ],
        left_x,
        y_left,
        left_w,
        size=8.0,
        leading=10.2,
    )

    y_left = section_title(c, "Education", left_x, y_left, left_w)
    y_left = draw_wrapped(c, "B.Sc. in Computer Science", left_x, y_left, left_w, "Helvetica-Bold", 8.5, 11, NAVY)
    y_left = draw_wrapped(c, "Green University of Bangladesh, 2022", left_x, y_left, left_w, size=8, leading=10)
    y_left -= 5
    y_left = draw_wrapped(c, "Computer Technology", left_x, y_left, left_w, "Helvetica-Bold", 8.5, 11, NAVY)
    y_left = draw_wrapped(c, "Brahmanbaria Polytechnic Institute, 2018", left_x, y_left, left_w, size=8, leading=10)

    y_left -= 8
    y_left = section_title(c, "Languages", left_x, y_left, left_w)
    y_left = bullet_list(
        c,
        ["Bangla - Native", "English - Conversational"],
        left_x,
        y_left,
        left_w,
        size=8,
        leading=10,
    )

    y_right = section_title(c, "Professional Summary", right_x, y_right, right_w)
    summary = (
        "Full stack developer with 4+ years of experience building scalable web applications, "
        "with strong specialization in Laravel and Next.js. Experienced across backend architecture, "
        "API design, reusable dashboards, DevOps support, payment integrations, notifications, "
        "and cross-platform mobile delivery with React Native and Expo."
    )
    y_right = draw_wrapped(c, summary, right_x, y_right, right_w, size=8.8, leading=11.7)
    y_right -= 9

    y_right = section_title(c, "Experience", right_x, y_right, right_w)
    y_right = job(
        c,
        "Softivus (In-house)",
        "Software Engineer",
        "Uttara, Dhaka, Bangladesh",
        "Aug 2024 - Present",
        [
            "Lead a development team delivering multiple CodeCanyon and international client projects while supporting deployment, scaling, and server optimization.",
            "Designed a reusable dashboard foundation for CodeCanyon projects, improving delivery speed and consistency across multiple applications.",
            "Implemented payment gateway integrations with multi-currency support for global application workflows.",
            "Built dynamic notification systems for email, SMS, and Firebase, including admin-managed templates.",
            "Built more than four cross-platform mobile applications using React Native and Expo.",
        ],
        right_x,
        y_right,
        right_w,
    )
    y_right = job(
        c,
        "Arrowhead IT Solution (Remote - Part Time)",
        "Full Stack Developer",
        "Khulna, Bangladesh",
        "Sep 2023 - Apr 2025",
        [
            "Designed and integrated microservices architecture for an ERP application, improving scalability and maintainability.",
            "Developed and maintained Laravel APIs with Next.js and Vue.js frontend integrations.",
            "Improved application response times by 60% through performance optimization and development workflow improvements.",
        ],
        right_x,
        y_right,
        right_w,
    )
    y_right = job(
        c,
        "Ilegecy (Remote)",
        "Backend Developer",
        "Kuala Lumpur, Malaysia",
        "Nov 2021 - Aug 2023",
        [
            "Designed efficient MySQL and PostgreSQL database structures for courier and lead management applications.",
            "Integrated third-party APIs and services to extend application features and improve user experience.",
            "Optimized queries using indexing, Redis caching, Laravel Telescope, and laravel-debugbar monitoring.",
            "Participated in code reviews and contributed to coding standards and quality improvements.",
        ],
        right_x,
        y_right,
        right_w,
    )


def draw_page_two(c):
    header(c, 2)
    x, w = 42, 528
    y = PAGE_H - 122
    y = section_title(c, "Selected Projects", x, y, w)
    y = project(
        c,
        "Quiz Platform",
        "Laravel, Next.js, Firebase, MySQL, React Native",
        "Item Link | Mobile Link",
        [
            "Developed a gamified quiz platform for creating, managing, and monetizing quizzes through AdSense, Adsterra, and custom ads.",
            "Implemented contests, leaderboard ranking, coin-based virtual currency, and AI-powered question generation.",
            "Enabled admins to generate and translate questions with AI, reducing manual content creation effort.",
            "Integrated Firebase push notifications for web and mobile and prepared the product for CodeCanyon publication.",
        ],
        x,
        y,
        w,
    )
    y = project(
        c,
        "Yacht/Boat Rent and Selling Platform",
        "Laravel, Firebase, MySQL",
        "Item Link",
        [
            "Built a multivendor platform for yacht and boat rental and sales, enabling vendors to list, manage, and monetize fleets.",
            "Developed reusable admin dashboard features with automated email/SMS notifications and a template editor.",
            "Integrated Mapbox for immersive 3D location navigation, improving browsing for boat locations and routes.",
            "Optimized the platform for CodeCanyon submission, and the product was accepted on the first attempt.",
        ],
        x,
        y,
        w,
    )
    y = project(
        c,
        "Property Management Platform",
        "Laravel, Node.js, Next.js, Tailwind CSS, MySQL, DocuSign",
        "Live Link",
        [
            "Developed a property management platform for Comvst covering property rent, sale, investment, and auction modules.",
            "Implemented role-based workflows for users, property owners, agents, service providers, and admins.",
            "Built core modules for listings, rental management, sales flow, investment opportunities, and auction bidding.",
            "Integrated marketplace and handyman service workflows for property-related support requests.",
            "Built interactive Next.js interfaces and collaborated with stakeholders to align features with business goals.",
        ],
        x,
        y,
        w,
    )

    y -= 5
    left_x, left_w = 42, 250
    right_x, right_w = 318, 252
    y_left = y
    y_right = y

    y_left = section_title(c, "Technical Concepts", left_x, y_left, left_w)
    y_left = draw_chips(
        c,
        [
            "API Design",
            "Database Normalization",
            "Operating Systems",
            "Virtual Memory",
            "Cache Memory",
            "Encryption",
            "Decryption",
            "Agile Methodology",
            "SonarQube",
            "Laravel Octane",
            "Cloudflare",
            "Laravel Vapor",
            "Oracle MySQL HeatWave",
        ],
        left_x,
        y_left,
        left_w,
    )

    y_left = section_title(c, "Achievement", left_x, y_left, left_w)
    y_left = bullet_list(
        c,
        [
            "Best Project Award for developing a Bangla Assignment Plagiarism Checker using Django, OCR, and NLTK during final year.",
        ],
        left_x,
        y_left,
        left_w,
        size=8.2,
        leading=10.5,
    )

    y_right = section_title(c, "Professional Focus", right_x, y_right, right_w)
    y_right = bullet_list(
        c,
        [
            "Backend-first full stack development for production web applications.",
            "Reusable product foundations for faster project delivery.",
            "Performance, deployment, and maintainability for growing systems.",
            "Clear communication with teams, clients, and stakeholders.",
        ],
        right_x,
        y_right,
        right_w,
        size=8.2,
        leading=10.5,
    )

    c.setFillColor(MUTED)
    c.setFont("Helvetica", 7.5)
    c.drawRightString(PAGE_W - 42, 30, "Updated CV - Md Safiullah")


def main():
    c = canvas.Canvas(OUTPUT, pagesize=letter)
    c.setTitle("Md Safiullah - CV")
    c.setAuthor("Md Safiullah")
    draw_page_one(c)
    c.showPage()
    draw_page_two(c)
    c.save()


if __name__ == "__main__":
    main()
