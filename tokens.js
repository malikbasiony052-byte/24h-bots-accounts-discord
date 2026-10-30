// status can be "online", "idle", "dnd", or "invisible" or "offline"
import 'dotenv/config';
export default [
    {
        channelId: "1491081264084680774",
        serverId: "676912540181200935",
        token: process.env.TOKEN1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];
