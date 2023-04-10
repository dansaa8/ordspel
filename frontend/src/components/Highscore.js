useEffect(() => {
    async function loadHighscores() {
      const res = await fetch('./highscores');
      const payload = await res.json();
      console.log(payload.data);
    }
    loadHighscores();
  }, []);