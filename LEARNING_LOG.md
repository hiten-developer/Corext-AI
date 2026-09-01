## Day 1 — 31-08-2026

**Kya kiya:**
- Basic Express server setup (app.js + server.js separation)
- Git init, .gitignore, GitHub pe push kiya

**Kya seekha:**
- app.js/server.js ko alag rakhne ka fayda — testing ke time server auto-start nahi hona chahiye
- .gitignore root mein kyun honi chahiye (poore repo pe apply hoti hai)


## Day 2 — 01-09-2026

**Kya kiya:**
- `users` aur `conversations` tables ka schema design + create kiya PostgreSQL mein
- Foreign key (`REFERENCES`) se `conversations.user_id` ko `users.id` se link kiya
- Data insert/select/truncate karke test kiya
- GitHub repo naam ka typo fix kiya (`corex-ai` → `cortex-ai`), local remote URL update kiya

**Kya seekha:**
- `PRIMARY KEY` duplicate id insert hone se rokta hai
- `FOREIGN KEY` invalid/orphan reference insert hone se rokta hai
- `TRUNCATE` referenced table ko akele nahi hone deta jab tak `CASCADE` ya saari tables ek saath na di jayein
- `git remote set-url` se remote repo URL update kar sakte hain bina local folder rename kiye