const { z } = require('zod');

const helpfulVideoSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  url: z.string().url().regex(/youtube\.com\/watch\?v=/, 'Must be a valid YouTube link'),
  thumbnail: z.string().url().optional(),
});

module.exports = { helpfulVideoSchema };