#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use discord_rich_presence::{activity, new_client, DiscordIpc};

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let mut client = new_client("855428383574589460")?;
            client.connect()?;

            let activity = activity::Activity::new()
                .state("Yukikaze")
                .details("Viewing the Yukikaze desktop app")
                .assets(
                    activity::Assets::new()
                        .large_image("yukikaze")
                        .large_text("Yukikaze"),
                )
                .buttons(vec![activity::Button::new(
                    "Download",
                    "https://yukikaze.tech/download",
                )]);

            app.listen_global("loaded", |event| {
                println!("got loaded {:?}", event.payload());

                client.set_activity(activity)?;
            });

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
