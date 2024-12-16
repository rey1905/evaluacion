from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

tasks = []

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        task = request.form.get("task")
        if task:
            tasks.append({"name": task, "completed": False})
    return render_template("index.html", tasks=tasks)

@app.route("/complete/<int:index>")
def complete(index):
    tasks[index]["completed"] = True
    return redirect(url_for("index"))

@app.route("/delete/<int:index>")
def delete(index):
    tasks.pop(index)
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
