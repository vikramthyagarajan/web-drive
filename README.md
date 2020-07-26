# Web Drive

A simplified Google Drive clone built on Django and React to help you maintain you personal data cloud

![Homepage](https://raw.githubusercontent.com/vikramthyagarajan/web-drive/master/server/uploads/wd-hierarchy.png)

# Installation

1. Clone this repository

2. Enter the project folder, set up python3, then run
```
python -m pip -r requirements.txt
```

3. Set up postgresql, and create a database under user postgres with the database name webdrive
```
psql -u postgres
create database webdrive;
```

If you'd like to use a different user, or a different database name, make sure to make changes in settings.py

4. Run migrations
```
python manage.py migrate
```

5. Seed data into db
```
python manage.py loaddata src/fixtures/seed.json
```

6. Start the server
```
python manage.py runserver
```

7. Open another terminal session into the client folder
```
cd client
```

8. If you don't have latest node (14+) then you can change directory to the client/build folder and start a static server from there and try out the application
```
cd build
npm install -g static-server
static-server -p 3000 . -n index.html
```

9. Continue the installation and install dependencies in the client folder
```
npm install
```

10. Run the web client in your browser using this script
```
npm run dev
```

11. Visit http://localhost:3000/ in your browser

12. WebDrive comes with a cron script that periodically clears all text files that you have uploaded in the system. To start the task, run
```
python manage.py runcrons
```

# Usage

## List folders
![List all files and folders](https://raw.githubusercontent.com/vikramthyagarajan/web-drive/master/server/uploads/wd-home.png)

## Add file/folder
![Add files and folders](https://raw.githubusercontent.com/vikramthyagarajan/web-drive/master/server/uploads/wd-add.png)

## Search files and folder
![Search through all files and folders](https://raw.githubusercontent.com/vikramthyagarajan/web-drive/master/server/uploads/wd-search.png)

## Move file and folder
![Move files within folders](https://raw.githubusercontent.com/vikramthyagarajan/web-drive/master/server/uploads/wd-move.png)

## Delete files and folders
![Delete files and folders by clicking the x](https://raw.githubusercontent.com/vikramthyagarajan/web-drive/master/server/uploads/wd-hierarchy.png)


# Troubleshooting/Contact

You can write to me here on github or on my email at `vikramthyagarajan92@gmail.com`