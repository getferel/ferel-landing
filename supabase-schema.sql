-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  country TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the form)
CREATE POLICY "Allow anonymous inserts" ON waitlist
  FOR INSERT
  WITH CHECK (true);

-- Allow anonymous selects (for admin dashboard later)
CREATE POLICY "Allow anonymous selects" ON waitlist
  FOR SELECT
  USING (true);

-- Create index on submitted_at for sorting
CREATE INDEX IF NOT EXISTS idx_waitlist_submitted_at ON waitlist(submitted_at DESC);

-- Create index on country for filtering
CREATE INDEX IF NOT EXISTS idx_waitlist_country ON waitlist(country);
