-- Create plans table
create table if not exists public.plans (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  price numeric not null,
  period text not null, -- e.g. 'month', 'year'
  created_at timestamp with time zone default timezone('utc', now())
);

-- Create subscriptions table
create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  plan_id uuid references public.plans(id) on delete set null,
  status text not null default 'active', -- e.g. 'active', 'canceled', 'trial'
  started_at timestamp with time zone default timezone('utc', now()),
  ends_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc', now())
);

-- Index for quick lookup
create index if not exists idx_subscriptions_user_id on public.subscriptions(user_id);
create index if not exists idx_subscriptions_plan_id on public.subscriptions(plan_id);
