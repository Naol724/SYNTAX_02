# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Set Up Environment Variables

Create a `.env.local` file in the project root with your OpenAI API key:

```env
OPENAI_API_KEY=sk-your-openai-api-key-here
PORT=5000
NODE_ENV=development
```

**Get your OpenAI API key:**
1. Go to https://platform.openai.com/
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new secret key
5. Copy and paste it into `.env.local`

### Step 2: Install Dependencies (if not already done)

```bash
cd "c:\Users\Naol\Desktop\Unit project\SYNTAX NEW\SYNTAX_02\SYNTAX_02"
npm install
```

### Step 3: Start Development Server

```bash
npm run dev
```

The server will start on **http://localhost:5000**

## 📱 What You'll See

### Main Website (Corporate)
Visit http://localhost:5000

- **Home** - Cinematic hero with animations, services, testimonials
- **About** - Company story, team, values
- **Services** - Full service catalog with descriptions
- **Projects** - Portfolio showcase
- **Contact** - Contact form (saves to database)

### AI Chat Assistant
Visit http://localhost:5000/chat

1. **Select a Category:**
   - 🌐 Website Development
   - 🎬 Video Editing
   - 🎨 Graphics Design
   - 💬 General Creative

2. **Start Chatting:**
   - Type your question or request
   - Get AI-powered responses with code examples
   - View suggestions and helpful tips

3. **Upload Files:**
   - Click the upload button
   - Upload images, videos, or code files
   - Get AI analysis and insights

## 🧪 Test the Features

### Test Chat:
```
Ask: "How do I create a responsive navigation bar in HTML and CSS?"
Expected: Detailed response with code examples
```

### Test File Upload:
```
1. Click upload icon in chat
2. Upload an image or HTML file
3. Get AI analysis of the file
```

### Test API Directly:
```bash
# Get all conversations
curl http://localhost:5000/api/conversations

# Get contact messages
curl http://localhost:5000/api/messages
```

## 🎨 Available Routes

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/about` | About page |
| `/services` | Services page |
| `/projects` | Projects showcase |
| `/contact` | Contact form |
| `/chat` | AI Chat Assistant ✨ |

## 🔧 Troubleshooting

### Issue: "Cannot find module 'multer'"
**Solution:** Run `npm install`

### Issue: "OpenAI API error"
**Solution:** 
1. Check your API key in `.env.local`
2. Verify you have credits in your OpenAI account
3. Check API key permissions

### Issue: Port 5000 already in use
**Solution:** Change port in `.env.local`:
```env
PORT=3000
```

### Issue: Build fails
**Solution:** 
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

## 📝 Development Tips

### Hot Reload:
- Changes to Next.js pages auto-reload
- Changes to server code require restart (Ctrl+C, then `npm run dev`)

### View Logs:
- Server logs appear in terminal
- Check console for API errors
- Use browser DevTools for client errors

### Testing Chat:
1. Open browser console (F12)
2. Go to `/chat`
3. Watch network requests in DevTools
4. Check for any errors in console

## 🎯 What to Build Next

Once everything works, consider:

1. **Add Your Content:**
   - Update company info in pages
   - Add your projects to Projects page
   - Customize services and pricing

2. **Customize AI Assistant:**
   - Modify system prompts in `server/services/openai.ts`
   - Add more categories
   - Adjust response formatting

3. **Add Database:**
   - Set up PostgreSQL
   - Update `server/storage.ts` to use Drizzle ORM
   - Run migrations

4. **Deploy:**
   - Deploy to Vercel (Next.js)
   - Deploy API to Railway/Render
   - Set up production database

## 🆘 Need Help?

Check these files for more info:
- `BUILD_COMPLETE.md` - Full build documentation
- `README.md` - Project overview
- `replit.md` - Architecture details

## ✅ Success Checklist

- [ ] Environment variables configured
- [ ] Dependencies installed
- [ ] Development server running
- [ ] Can access home page
- [ ] Can access chat page
- [ ] Chat responses work
- [ ] File upload works
- [ ] Contact form saves messages

---

**Ready to build something amazing!** 🚀
