# Accounting Scenarios Helper

A modern, community-driven educational platform designed to help students and professionals master accounting fundamentals through real-world scenarios. Built with Next.js, Supabase, and Redux Toolkit.

## 🚀 Features

- **Interactive Scenarios**: Explore a wide range of real-world accounting events with clear Debit/Credit rules.

* **Learning Hub**: A dedicated space for mastering basic terms like Assets, Liabilities, Equity, Revenue, and Expenses.

- **Community Contributions**: Anyone can contribute new scenarios to build the ultimate accounting rule engine.
- **Smart Caching**: Powered by RTK Query for instant navigation and optimized performance.
- **Premium UI**: A sleek, dark-themed interface built with Tailwind CSS v4 and Lucide React icons.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: Supabase (PostgreSQL)
- **State Management**: Redux Toolkit & RTK Query
- **Icons**: Lucide React

## 🏁 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- A Supabase account

### Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/itz-Uzzie/accounting-scenarios.git
    cd accounting-scenarios
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Configure Environment Variables**:
    Create a `.env.local` file in the root directory and add your Supabase credentials:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

### 🗄️ Supabase Setup

To make the app work, you need to create an `accounting_rules` table in your Supabase database with the following structure:

| Column       | Type        | Description                                            |
| :----------- | :---------- | :----------------------------------------------------- |
| `id`         | uuid        | Primary Key (Default: auth.uid() or gen_random_uuid()) |
| `created_at` | timestamptz | Creation timestamp                                     |
| `category`   | text        | The group this scenario belongs to (e.g., Sales)       |
| `scenario`   | text        | Description of the accounting event                    |
| `debit`      | text        | The account to be debited                              |
| `credit`     | text        | The account to be credited                             |
| `extra`      | text        | Optional additional context                            |

**SQL Snippet for Table Creation:**

```sql
create table accounting_rules (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  category text not null,
  scenario text not null,
  debit text not null,
  credit text not null,
  extra text
);
```

### 🏃 Running Locally

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🤝 Contributing

This is a learning project! If you know an accounting scenario that isn't listed or want to improve the explanations, please feel free to:

1.  Use the "Add New Scenario" feature directly in the app.
2.  Open an issue or submit a pull request with new features or corrections.

## 📝 License

This project is for educational purposes. Feel free to use it to learn and share knowledge.
