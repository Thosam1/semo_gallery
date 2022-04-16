/* This file goal is to automatically update vercel app any time there is a change in the Supabase database -> added security so no unauthorized party can modify database */

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' }) // for security reasons
  }

  try {
    // Regenerate our index route showing the images
    await res.unstable_revalidate('/')
    return res.json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}