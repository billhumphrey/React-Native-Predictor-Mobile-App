import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function RulesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Rules and Guidelines</Text>

      <Text style={styles.sectionTitle}>1. Subscription and Access</Text>
      <Text style={styles.paragraph}>
        Access to predictions is granted only after successful subscription. The payments should be done through the system in order to be recorded.
      </Text>
      <Text style={styles.paragraph}>
        Refund is only successful when the request is within time (7 days). Write the reason for your refund in order for us to improve the system next time to match your expectations.
      </Text>
      <Text style={styles.paragraph}>
        Subscriptions are valid for 2 months after which you will subscribe again.
      </Text>
      <Text style={styles.paragraph}>
        No sharing or reselling of prediction data is allowed.
      </Text>

      <Text style={styles.sectionTitle}>2. Use of Predictions</Text>
      <Text style={styles.paragraph}>
        Our app uses historical Aviator data pulled via the Spribe API to analyze previous multipliers and patterns.
      </Text>
      <Text style={styles.paragraph}>
        The Aviator system is programmed to ensure fair results, with minimal manipulation allowed. While the system is designed to take out your money at the end of the day, manipulation can only occur with slight interference in the game, making the odds detectable by our AI model.
      </Text>
      <Text style={styles.paragraph}>
        This data is then fed into our AI model, which performs statistical analysis and generates predicted odds for the upcoming rounds.
      </Text>
      <Text style={styles.paragraph}>
        The prediction shown (e.g., 4x) is the maximum expected multiplier, but users are strongly advised to cash out earlier—for example: If prediction = 4x, consider cashing out at 2x or 3x to stay on the safer side.
      </Text>
      <Text style={styles.paragraph}>
        Do not wait for the exact prediction point, as the game is fast and highly volatile.
      </Text>

      <Text style={styles.sectionTitle}>3. Risk Management Guidelines</Text>
      <Text style={styles.paragraph}>
        Predictions are 90% guaranteed, but users must avoid greed and stick to disciplined cash-out strategies.
      </Text>
      <Text style={styles.paragraph}>
        Never aim beyond 10x, even when predictions appear strong. This minimizes the chance of loss and reduces casino suspicion.
      </Text>
      <Text style={styles.paragraph}>
        After receiving 2 successful cashouts, let the next round “fly away” with a small stake, regardless of the multiplier, even if the odds are as high as 100x. This helps avoid drawing patterns that can be flagged by casino systems and your account may be suspended.
      </Text>

      <Text style={styles.sectionTitle}>4. Set Realistic Profit Targets</Text>
      <Text style={styles.paragraph}>
        Gambling platforms can monitor accounts that win too consistently. To avoid account bans or suspicion, users should:
      </Text>
      <Text style={styles.paragraph}>
        - Set realistic daily or session targets.
      </Text>
      <Text style={styles.paragraph}>
        - Withdraw winnings and leave the game after reaching your target.
      </Text>
      <Text style={styles.paragraph}>
        Example Strategy:
      </Text>
      <Text style={styles.paragraph}>
        Starting Capital: Ksh 1,000 / $10
      </Text>
      <Text style={styles.paragraph}>
        Target: Ksh 20,000 / $200
      </Text>
      <Text style={styles.paragraph}>
        Once the target is achieved, exit the casino and rest the account.
      </Text>

      <Text style={styles.sectionTitle}>5. Account Safety</Text>
      <Text style={styles.paragraph}>
        Do not share your login credentials with others.
      </Text>
      <Text style={styles.paragraph}>
        Use a strong password and keep your email/phone number updated for recovery.
      </Text>
      <Text style={styles.paragraph}>
        The app reserves the right to suspend or terminate accounts showing suspicious activity.
      </Text>

      <Text style={styles.sectionTitle}>6. Content Protection</Text>
      <Text style={styles.paragraph}>
        All content, design, and prediction methods are intellectual property of the app owner.
      </Text>
      <Text style={styles.paragraph}>
        Users are not allowed to copy, replicate, or redistribute any part of the app without permission.
      </Text>

      <Text style={styles.sectionTitle}>7. User Conduct</Text>
      <Text style={styles.paragraph}>
        Any attempt to cheat, manipulate, or abuse the app will lead to immediate ban.
      </Text>
      <Text style={styles.paragraph}>
        Users should not mislead others by falsely advertising results using the app.
      </Text>

      <Text style={styles.sectionTitle}>8. Disclaimers</Text>
      <Text style={styles.paragraph}>
        Results may vary; the predictions are based on data analysis, and while predictions are 90% guaranteed, the nature of the game still involves risk. The developers and owners are not liable for any losses incurred if you are not following our rules and guidelines.
      </Text>

      <Text style={styles.sectionTitle}>9. Bug Reporting and Feedback</Text>
      <Text style={styles.paragraph}>
        If you encounter bugs or issues, report them via the support section.
      </Text>
      <Text style={styles.paragraph}>
        Feedback is welcome and helps us improve the app for everyone.
      </Text>

      <Text style={styles.sectionTitle}>10. Privacy and Data Use</Text>
      <Text style={styles.paragraph}>
        We do not share your personal data with third parties.
      </Text>
      <Text style={styles.paragraph}>
        All user data is protected under our Privacy Policy.
      </Text>

      <Text style={styles.footer}>Last updated: April 2025</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 8,
    color: '#222',
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    lineHeight: 22,
  },
  footer: {
    marginTop: 40,
    fontSize: 14,
    textAlign: 'center',
    color: '#999',
  },
});
