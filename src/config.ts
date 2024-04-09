import { ActivityType } from 'discord.js';
import { BotConfig } from './structures/types'; 

export const config: BotConfig = {
    groupId: 4544444,
    slashCommands: true,
    legacyCommands: {
        enabled: true,
        prefixes: ['q!'],
    },
    permissions: {
        all: ['516653832978169856'],
        ranking: [''],
        users: [''],
        shout: [''],
        join: [''],
        signal: [''],
        admin: [''],
    },
    logChannels: {
        actions: '',
        shout: '',
    },
    api: false,
    maximumRank: 5,
    verificationChecks: false,
    bloxlinkGuildId: '',
    firedRank: 1,
    suspendedRank: 1,
    recordManualActions: true,
    memberCount: {
        enabled: false,
        channelId: '',
        milestone: 100,
        onlyMilestones: false,
    },
    xpSystem: {
        enabled: false,
        autoRankup: false,
        roles: [],
    },
    antiAbuse: {
        enabled: false,
        clearDuration: 1 * 60,
        threshold: 10,
        demotionRank: 1,
    },
    activity: {
        enabled: true,
        type: ActivityType.Watching,
        value: 'loror',
    },
    status: 'online',
    deleteWallURLs: false,
}
