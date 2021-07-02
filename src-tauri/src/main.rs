#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use rustcord::{Rustcord, EventHandlers, User, RichPresenceBuilder};

pub struct Handlers;

impl EventHandlers for Handlers {
    fn ready(user: User) {
        println!("User {}#{} logged in...", user.username, user.discriminator);
    }
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let discord = Rustcord::init::<Handlers>("855428383574589460", true, None)?;
            let presence = RichPresenceBuilder::new()
                .state("Yukikaze")
                .details("Browsing the desktop app")
                .large_image_key("yukikaze")
                .large_image_text("Yukikaze")
                .build();

            app.listen_global("loaded", |event| {
                println!("got loaded {:?}", event.payload());

                discord.update_presence(presence)?;
                loop {
                    discord.run_callbacks();
                }
            });

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
